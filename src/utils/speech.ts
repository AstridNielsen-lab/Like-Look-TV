export function speak(text: string) {
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Configure for Brazilian Portuguese
  utterance.lang = 'pt-BR';
  
  // Adjust speed (1.1 is slightly faster but still natural)
  utterance.rate = 1.1;
  
  // Adjust pitch for a more pleasant voice (1.1 gives a slightly higher, clearer tone)
  utterance.pitch = 1.1;
  
  // Increase volume slightly
  utterance.volume = 1.0;

  // Get available voices and try to select a better quality one
  const voices = window.speechSynthesis.getVoices();
  const brazilianVoice = voices.find(voice => 
    voice.lang.includes('pt-BR') && voice.name.includes('Google')
  );
  
  if (brazilianVoice) {
    utterance.voice = brazilianVoice;
  }

  window.speechSynthesis.speak(utterance);
}