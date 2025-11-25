import fs from 'fs';
import path from 'path';
import { SitemapLink, SitemapCategory } from '../types/sitemap';

export function parseSitemapLine(line: string): SitemapLink | null {
  // Match pattern: Title (Legendado/Dublado) - <b><a href="URL" target="_blank">Acessar</a></b><br>
  const regex = /^(.+?)(?: \((Legendado|Dublado|Dublado \/ Legendado)\))? - <b><a href="([^"]+)"[^>]*>Acessar<\/a><\/b><br>$/;
  const match = line.match(regex);

  if (!match) return null;

  const [, title, status, url] = match;
  
  return {
    title,
    url,
    isDubbed: status?.includes('Dublado') || false,
    isSubbed: status?.includes('Legendado') || false
  };
}

export function readSitemapFile(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}

export function parseSitemapData(content: string): SitemapCategory {
  const lines = content.split('\n').filter(line => line.trim());
  const categories: SitemapCategory = {};
  let currentCategory = '';

  lines.forEach(line => {
    if (line.startsWith('# ')) {
      // New category
      currentCategory = line.substring(2).trim();
      categories[currentCategory] = [];
    } else {
      const link = parseSitemapLine(line);
      if (link && currentCategory) {
        categories[currentCategory].push(link);
      }
    }
  });

  return categories;
}