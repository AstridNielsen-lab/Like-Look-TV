import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Video } from '../types';

interface CarouselProps {
  title: string;
  items: Video[];
  onItemClick: (video: Video) => void;
}

export function Carousel({ title, items, onItemClick }: CarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-white px-4">{title}</h2>
      <div className="relative group">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="text-white" />
        </button>
        
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-4 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-none w-64 relative cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => onItemClick(item)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-36 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <h3 className="text-white font-semibold truncate">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
}