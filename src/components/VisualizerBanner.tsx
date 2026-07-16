import { PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function VisualizerBanner() {
  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=2070" 
          alt="Room Visualizer" 
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto px-10 text-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 block">Interactive Tool</span>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-[1.1]">
          Experience It Before You <span className="italic font-serif">Build It</span>
        </h2>
        <p className="text-sm text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Try our state-of-the-art 3D Visualizer. See how our premium tiles and marble will look in your own space before making a decision.
        </p>
        <button className="bg-white text-black hover:bg-gray-100 px-10 py-4 text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center justify-center gap-3 w-full md:w-auto">
          <PlayCircle className="w-4 h-4" />
          LAUNCH VISUALIZER
        </button>
      </motion.div>
    </section>
  );
}
