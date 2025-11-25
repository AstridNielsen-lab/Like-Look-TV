import React from 'react';
import { Code, Users, Shield } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Nossa Visão</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Democratizar o acesso ao entretenimento digital com tecnologia de ponta e experiência única para nossos usuários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-blue-500 mb-4">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Desenvolvimento</h3>
            <p className="text-gray-400">
              Utilizamos as mais recentes tecnologias para criar uma plataforma robusta e escalável.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-blue-500 mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Experiência</h3>
            <p className="text-gray-400">
              Interface intuitiva e personalizada para melhor experiência do usuário.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-blue-500 mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Segurança</h3>
            <p className="text-gray-400">
              Proteção de dados e privacidade como prioridade em nossa plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}