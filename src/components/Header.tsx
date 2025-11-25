import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Tv } from 'lucide-react';

export function Header() {
  const whatsappNumber = '5511970603441';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
            <Tv className="w-6 h-6" />
            Like Look TV
          </Link>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
