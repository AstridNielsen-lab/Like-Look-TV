import React from 'react';
import { Link } from 'react-router-dom';

export function Sitemap() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-lg p-6">
          {/* Title */}
          <h1 className="text-4xl font-bold text-white text-center mb-8">Mapa do Site</h1>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link to="/" className="text-blue-400 hover:text-blue-300">Início</Link>
            <Link to="/tv" className="text-blue-400 hover:text-blue-300">TV</Link>
            <Link to="/series" className="text-blue-400 hover:text-blue-300">Séries</Link>
            <Link to="/novelas" className="text-blue-400 hover:text-blue-300">Novelas</Link>
            <Link to="/filmes" className="text-blue-400 hover:text-blue-300">Filmes</Link>
          </div>

          {/* Animes Section */}
          <div className="text-gray-200">
            <h2 className="text-3xl font-bold text-center mb-8">Animes</h2>
            
            {/* Números & Símbolos */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Números & Símbolos</h3>
              <div className="space-y-2">
                {/* Your existing links with updated styling */}
                <div>
                  2x2 Shinobuden (Legendado) - <a href="https://redecanais.ps/browse-2x2shinobuden-videos-1-date.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-bold">Acessar</a>
                </div>
                <div>
                  07-Ghost (Legendado) - <a href="https://redecanais.ps/browse-07-ghost-videos-1-date.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-bold">Acessar</a>
                </div>
                {/* Continue with your existing links in the same format */}
              </div>
            </div>

            {/* Letra A */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Letra - A</h3>
              <div className="space-y-2">
                <div>
                  A Channel (Legendado) - <a href="https://redecanais.ps/browse-a-channel-videos-1-date.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-bold">Acessar</a>
                </div>
                {/* Continue with your existing links in the same format */}
              </div>
            </div>

            {/* Add your remaining categories and links here */}
            {/* Just wrap each link in a div and add the className to the anchor tags */}
            {/* Example format for your existing links:
            <div>
              TITLE (Legendado) - <a href="URL" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-bold">Acessar</a>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}