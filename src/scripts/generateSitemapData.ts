import path from 'path';
import { readSitemapFile, parseSitemapData } from '../utils/sitemapParser';

const sitemapFilePath = path.join(__dirname, '../data/sitemapLinks/sitemap.txt');

try {
  const content = readSitemapFile(sitemapFilePath);
  const sitemapData = parseSitemapData(content);
  
  // Generate the data file
  console.log('export const sitemapData =', JSON.stringify(sitemapData, null, 2));
} catch (error) {
  console.error('Error generating sitemap data:', error);
  process.exit(1);
}