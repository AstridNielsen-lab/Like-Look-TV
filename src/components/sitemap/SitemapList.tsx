import React from 'react';
import { SitemapLink } from '../../types/sitemap';

interface SitemapListProps {
  category: string;
  links: SitemapLink[];
}

export function SitemapList({ category, links }: SitemapListProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-white mb-4">{category}</h2>
      <div className="bg-gray-800 rounded-lg p-6">
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.title} className="flex items-center">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors flex-grow"
              >
                {link.title}
                {(link.isDubbed || link.isSubbed) && (
                  <span className="text-gray-400 ml-2">
                    ({[
                      link.isDubbed && 'Dublado',
                      link.isSubbed && 'Legendado'
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