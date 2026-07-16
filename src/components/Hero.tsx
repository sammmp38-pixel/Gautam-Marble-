import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=2070",
    title: "ELEVATING LIVING SPACES",
    subtitle: "Discover India's finest collection of polished vitrified tiles.",
    tag: "New Collection 2024"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2070",
    title: "THE ART OF MARBLE",
    subtitle: "Timeless elegance crafted for modern architecture.",
    tag: "Imported Selection"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070",
    title: "LUXURY BATHWARE",
    subtitle: "Redefining tranquility and style in your bathroom.",
    tag: "Exclusive Range"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[85vh] min-h-[650px] md:min-h-0 md:h-[700px] lg:h-[800px] w-full overflow-hidden bg-[#f4f1ea] group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col md:flex-row"
        >
          <div className="h-[45%] md:h-full md:w-1/2 bg-[#f4f1ea] p-8 md:p-20 flex flex-col justify-center relative z-10">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4 md:mb-6 block">
                {slides[current].tag}
              </span>
              <h1 className="text-3xl md:text-6xl font-light leading-[1.1] mb-4 md:mb-6 text-gray-900">
                {slides[current].title.split(' ').map((word, i) => (
                  i === 1 ? <span key={i} className="italic font-serif mr-2">{word} </span> : <span key={i} className="mr-2">{word} </span>
                ))}
              </h1>
              <p className="text-gray-600 max-w-md mb-8 md:mb-10 text-xs md:text-sm leading-relaxed hidden sm:block">
                {slides[current].subtitle}
              </p>
              <div className="flex space-x-3 md:space-x-4">
                <button className="border border-black px-4 md:px-8 py-3 text-[10px] md:text-xs uppercase font-bold hover:bg-black hover:text-white transition-colors">
                  VIEW CATALOG
                </button>
                <a 
                  href="https://wa.me/9109078958414?text=Hello, I would like to make an inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 md:px-8 py-3 text-[10px] md:text-xs uppercase font-bold hover:bg-gray-800 transition-colors inline-block"
                >
                  INQUIRE NOW
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="h-[55%] md:h-full md:w-1/2 relative">
            <motion.img
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "linear" }}
              src={slides[current].image}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-auto md:right-24 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md z-20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md z-20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-10 left-10 md:left-20 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-12 h-0.5 transition-all ${
              current === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
