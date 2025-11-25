import React from 'react';
import { Play } from 'lucide-react';
import { Video } from '../types';
import { YouTubePlayer } from './YouTubePlayer';

interface FeaturedBannerProps {
  video: Video;
  onPlay: (video: Video) => void;
}

export function FeaturedBanner({ video, onPlay }: FeaturedBannerProps) {
  return (
    <div className="relative h-[70vh] w-full">
      <YouTubePlayer videoId="L_qWILXrF0w" autoplay />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{video.title}</h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl">{video.description}</p>
        </div>
      </div>
    </div>
  );
}