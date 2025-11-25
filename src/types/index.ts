export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: 'tv' | 'series' | 'movies' | 'novelas';
  genre?: string;
  featured?: boolean;
  releaseDate?: string;
  duration?: string;
  rating?: string;
  cast?: string[];
  director?: string;
  language?: string;
  subtitles?: string[];
  quality?: '4K' | 'HD' | 'SD';
}

export interface Section {
  title: string;
  items: Video[];
}

export interface ContentMetadata {
  totalItems: number;
  lastUpdated: string;
  categories: {
    [key: string]: number;
  };
}