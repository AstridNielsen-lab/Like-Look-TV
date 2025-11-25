import React from 'react';
import { AnimeLink } from '../../types/anime';

interface AnimeListProps {
  category: string;
  animes: AnimeLink[];
}

export function AnimeList({ category, animes }: AnimeListProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-white mb-4">{category}</h2>
      <div className="bg-gray-800 rounded-lg p-6">
        <ul className="space-y-3">
          {animes.map((anime) => (
            <li key={anime.title} className="flex items-center">
              <a
                href={anime.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors flex-grow"
              >
                {anime.title}
                {(anime.isDubbed || anime.isSubbed) && (
                  <span className="text-gray-400 ml-2">
                    ({[
                      anime.isDubbed && 'Dublado',
                      anime.isSubbed && 'Legendado'
                    ].filter(Boolean).join(' / ')})
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}