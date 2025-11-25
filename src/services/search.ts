import { Video } from '../types';

export async function searchContent(query: string): Promise<Video[]> {
  // Format the search query using the specified pattern
  const searchQuery = `${query} site:redecanais.do`;
  
  // Open search in new window/tab
  window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
  
  return [];
}
