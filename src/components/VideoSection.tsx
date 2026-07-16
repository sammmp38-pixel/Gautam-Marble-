import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const videos = [
  {
    id: 1,
    url: 'https://videos.pexels.com/video-files/8082982/8082982-uhd_2160_3840_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800',
    title: 'Exotic Marble Collection',
    category: 'Showroom'
  },
  {
    id: 2,
    url: 'https://videos.pexels.com/video-files/4429990/4429990-hd_1920_1080_30fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    title: 'Premium Slabs Overview',
    category: 'Collections'
  },
  {
    id: 3,
    url: 'https://videos.pexels.com/video-files/5824905/5824905-uhd_3840_2160_24fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
    title: 'Bookmatch Masterpieces',
    category: 'Design'
  },
  {
    id: 4,
    url: 'https://videos.pexels.com/video-files/3205517/3205517-uhd_2160_4096_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&q=80&w=800',
    title: 'The Italian Craft',
    category: 'Heritage'
  },
  {
    id: 5,
    url: 'https://videos.pexels.com/video-files/5995777/5995777-uhd_3840_2160_24fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    title: 'Luxury Bathrooms',
    category: 'Interiors'
  },
  {
    id: 6,
    url: 'https://videos.pexels.com/video-files/4491745/4491745-hd_1920_1080_25fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1581850518616-bcb8077a2336?auto=format&fit=crop&q=80&w=800',
    title: 'Natural Stone Selection',
    category: 'Collections'
  }
];

export default function VideoSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0a] text-white border-t border-zinc-800/50 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[90rem] mx-auto px-4 md:px-10"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-medium mb-4 block">
              Cinematic Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-white">
              The Artisan's Vision
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Immerse yourself in the world of luxury surfaces. Browse our curated video collection highlighting raw extraction to the final masterpiece.
            </p>
          </div>
          
          <div className="flex items-center gap-4 self-start md:self-end">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 md:-mx-10 px-4 md:px-10">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="relative group flex-none w-[280px] sm:w-[320px] md:w-[400px] aspect-[9/16] snap-center overflow-hidden bg-zinc-900 border border-zinc-800/50 hover:border-white/20 transition-colors duration-500 cursor-pointer"
              >
                <video 
                  src={video.url}
                  poster={video.thumbnail}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] mb-3 block font-medium">
                    {video.category}
                  </span>
                  <h3 className="text-white font-serif text-xl md:text-2xl tracking-wide font-medium leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">
                    Explore Collection
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
