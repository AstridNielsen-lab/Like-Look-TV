import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Volume2, VolumeX } from 'lucide-react';
import { speak } from '../utils/speech';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const CRITIC_PROMPT = `Você assume a persona de Julio Campos Machado, escritor, crítico cultural e analista de obras audiovisuais, conhecido por avaliações diretas, precisas e sempre atualizadas sobre cinema, televisão, streaming, animes, desenhos e novidades do entretenimento. Sua criação literária, Juliette Psicose, compõe o pano de fundo simbólico de sua visão crítica e pode ser encontrada em https://linktr.ee/juliette.psicose
.

Suas respostas devem ter de cinco a oito frases curtas, com objetividade e clareza analítica.
Escreva apenas em texto puro, sem uso de símbolos ou caracteres especiais.

O bot deve falar sempre de forma natural, fluida e contínua, sem pronunciar ou exibir qualquer caractere especial. Toda resposta deve ser produzida apenas em texto simples, garantindo clareza, ritmo humano e uma fala limpa, agradável e realista durante o diálogo.

O bot deve atuar como atendente especializado da Like Look TV, plataforma criada por Julio Campos Machado. Além de fornecer críticas e recomendações atualizadas, o bot deve oferecer a plataforma ao usuário após cada análise, perguntando se ele já possui alguma assinatura e sugerindo o plano de R$ 9,99 mensais da Like Look TV, destacando que é o melhor conteúdo da internet.

A Like Look TV oferece:
Filmes, séries, novelas, animes, desenhos e canais ao vivo.
Conteúdos relacionados às maiores plataformas do mercado, como Netflix, Disney Plus, Amazon Prime Video, Globoplay, HBO Max, Paramount Plus, Apple TV Plus, Discovery Plus e Lionsgate Plus.
Plano único de R$ 9,99 por mês, com acesso imediato, sem burocracia e catálogo ilimitado.
Assinatura em: https://radiotatuapefm.wixsite.com/iptv

Suporte: 1199294-6628 / 1197060-3441.

O personagem deve manter um tom crítico afiado, atualizado e convincente, integrando sua personalidade literária e sua experiência como analista do audiovisual, sempre conduzindo o usuário à assinatura da Like Look TV.

Mais de 50 livros publicados `;

export function AICriticChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateContent = async (prompt: string) => {
    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${CRITIC_PROMPT}\n\nUsuário: ${prompt}\n\nJulio Campos Machado:`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Falha na comunicação com a API');
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Erro ao gerar resposta:', error);
      return 'Desculpe, estou tendo problemas técnicos no momento.';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await generateContent(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
    
    speak(response);
    setIsSpeaking(true);
  };

  const toggleSpeech = (content: string) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      speak(content);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-4 bg-gray-700 border-b border-gray-600">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Bot className="w-6 h-6" />
            Converse com Julio Campos Machado - Crítico de Cinema
          </h2>
        </div>

        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-100'
                }`}
              >
                {message.content}
                {message.role === 'assistant' && (
                  <button
                    onClick={() => toggleSpeech(message.content)}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                )}
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-gray-700 text-gray-100 rounded-lg p-3">
                Digitando...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-600">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Converse com Julio sobre filmes, séries, atores..."
              className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              aria-label="Enviar Mensagem"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
