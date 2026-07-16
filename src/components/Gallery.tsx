import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000',
    title: 'Gautam Marble Identity',
    category: 'Brand'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000',
    title: 'Dark Marble Accent',
    category: 'Interiors'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=2000',
    title: 'White Marble Bath',
    category: 'Bathware'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=2000',
    title: 'Modern Bath Design',
    category: 'Bathware'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
    title: 'Beige Marble Living',
    category: 'Interiors'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&q=80&w=2000',
    title: 'Marble Samples',
    category: 'Catalog'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1581850518616-bcb8077a2336?auto=format&fit=crop&q=80&w=2000',
    title: 'Natural Marble Catalog',
    category: 'Catalog'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=2000',
    title: 'Texture Collage',
    category: 'Patterns'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000',
    title: 'Dark Teal Bathroom',
    category: 'Bathware'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=2000',
    title: 'Shades & Styles',
    category: 'Patterns'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=2000',
    title: 'Bronze Fixtures',
    category: 'Bathware'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000',
    title: 'Luxury Hallway',
    category: 'Interiors'
  },
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000',
    title: 'Patterned Floor',
    category: 'Patterns'
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=2000',
    title: 'Modern Lobby',
    category: 'Interiors'
  },
  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=2000',
    title: 'Slab Displays',
    category: 'Catalog'
  }
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openSlider = (index: number) => {
    setCurrentIndex(index);
    setSelectedId(filteredImages[index].id);
    document.body.style.overflow = 'hidden';
  };

  const closeSlider = () => {
    setSelectedId(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 md:px-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Inspiration Gallery</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Discover the perfect blend of natural beauty and modern design. Browse through our curated collection of premium marbles and finished spaces.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-xs md:text-sm uppercase tracking-widest font-medium transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((img, index) => (
            <div 
              key={img.id}
              className="group relative h-[300px] md:h-[400px] overflow-hidden bg-gray-200 cursor-pointer"
              onClick={() => openSlider(index)}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <Maximize2 className="text-white w-8 h-8 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
                <span className="text-white font-serif text-xl tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  {img.title}
                </span>
                <span className="text-white/80 text-xs uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fullscreen Slider Overlay */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={closeSlider}
          >
            <button 
              onClick={closeSlider}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-10 text-white/50 hover:text-white z-50 p-4 transition-colors"
            >
              <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            <div className="relative w-full max-w-6xl max-h-[90vh] px-16 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  src={filteredImages[currentIndex].url}
                  alt={filteredImages[currentIndex].title}
                  className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={`text-${currentIndex}`}
                className="text-center mt-6"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-white font-serif text-2xl tracking-wider mb-2">{filteredImages[currentIndex].title}</h3>
                <p className="text-white/60 text-sm uppercase tracking-widest">{filteredImages[currentIndex].category}</p>
              </motion.div>
            </div>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-10 text-white/50 hover:text-white z-50 p-4 transition-colors"
            >
              <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
            </button>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2" onClick={(e) => e.stopPropagation()}>
              {filteredImages.map((_, idx) => (
                <div 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
