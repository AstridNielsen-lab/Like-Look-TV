import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { searchContent } from '../services/search';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    await searchContent(searchTerm);
    setSearchTerm('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar filmes, séries e mais..."
          className="w-full px-4 py-3 pl-12 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 px-4 py-1 rounded-md text-white hover:bg-blue-700 transition-colors"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}