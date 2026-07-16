import { motion } from 'motion/react';

export default function Collections() {
  return (
    <section className="py-24 bg-[#f4f1ea]">
      <div className="max-w-7xl mx-auto px-10">
        
        {/* Section 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center gap-16 mb-24"
        >
          <div className="lg:w-1/2 overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium Marble" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-6 w-64 shadow-2xl hidden md:block">
              <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Featured</div>
              <div className="text-lg font-serif italic border-b border-gray-200 pb-2 mb-2">Eternity Series</div>
              <p className="text-[10px] text-gray-500 leading-tight uppercase">Premium Finish / 1200x2400mm</p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-12 lg:mt-0">
            <h4 className="text-[10px] text-gray-500 font-bold tracking-[0.3em] mb-4 uppercase">Eternity Collection</h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-[1.1]">
              Glazed Vitrified <span className="italic font-serif">Tiles</span>
            </h2>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Experience the pinnacle of luxury with our Eternity collection. Inspired by the finest natural marble and stones from around the world, crafted with cutting-edge technology to bring timeless elegance to your spaces.
            </p>
            <button className="border border-black text-black hover:bg-black hover:text-white px-8 py-3 text-xs uppercase font-bold transition-colors">
              DISCOVER MORE
            </button>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col-reverse lg:flex-row items-center gap-16"
        >
          <div className="lg:w-1/2 lg:pr-8 mt-12 lg:mt-0">
            <h4 className="text-[10px] text-gray-500 font-bold tracking-[0.3em] mb-4 uppercase">Kerovit Bathware</h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-[1.1]">
              Make Your Bathroom <br className="hidden md:block"/>A <span className="italic font-serif">Masterpiece</span>
            </h2>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Transform your daily rituals with our premium bathware collection. Featuring contemporary designs, superior functionality, and pristine finishes that redefine the modern bathroom experience.
            </p>
            <button className="bg-black text-white px-8 py-3 text-xs uppercase font-bold hover:bg-gray-800 transition-colors">
              VIEW BATHWARE
            </button>
          </div>
          <div className="lg:w-1/2 overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium Bathware" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 w-64 shadow-2xl hidden md:block">
              <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">New Arrival</div>
              <div className="text-lg font-serif italic border-b border-gray-200 pb-2 mb-2">Aurum Collection</div>
              <p className="text-[10px] text-gray-500 leading-tight uppercase">Matte Black / Sensor Enabled</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
