import React from 'react';

interface YouTubePlayerProps {
  videoId: string;
  autoplay?: boolean;
}

export function YouTubePlayer({ videoId, autoplay = false }: YouTubePlayerProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? '1' : '0'}&mute=${autoplay ? '1' : '0'}&controls=1&rel=0`;

  return (
    <div className="relative w-full h-full">
      <iframe
        src={embedUrl}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}