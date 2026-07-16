import { motion } from 'motion/react';

export default function Categories() {
  const categories = [
    { name: 'BATHROOM', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800' },
    { name: 'LIVING ROOM', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800' },
    { name: 'OUTDOOR', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
    { name: 'KITCHEN', image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
    { name: 'BEDROOM', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800' },
    { name: 'COMMERCIAL SPACES', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <section className="py-20 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 md:px-10"
      >
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Find Tiles by Category</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Gautam Marble offers premium wall and floor tiles, combining advanced technology with elegant designs for lasting quality and easy maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {categories.map((cat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-center text-gray-900 font-serif text-lg md:text-xl uppercase tracking-wider">{cat.name}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
