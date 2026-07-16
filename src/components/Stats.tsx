import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { number: '35+', label: 'YEARS OF EXCELLENCE' },
    { number: '10', label: 'MANUFACTURING PLANTS' },
    { number: '80+', label: 'COUNTRIES EXPORTED TO' },
    { number: '3000+', label: 'DEALER NETWORK' }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-10"
      >
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4 block">Global Footprint</span>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            India's <span className="italic font-serif">Premium</span> Brand
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:divide-x md:divide-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="px-4">
              <div className="text-4xl md:text-5xl font-light text-black mb-4">
                {stat.number}
              </div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
