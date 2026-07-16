import { motion } from 'motion/react';
import { Calendar, Truck, ArrowRight } from 'lucide-react';

export default function BookingDelivery() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Booking & Logistics</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Experience seamless service from selection to installation with our dedicated consultation and premium delivery options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          
          {/* Booking Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative bg-gray-50 p-10 md:p-14 overflow-hidden border border-gray-100 hover:border-gray-300 transition-colors duration-500"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 transition-transform">
              <Calendar className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-full mb-8 shadow-lg">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">Book a Consultation</h3>
              <p className="text-gray-500 mb-10 max-w-sm leading-relaxed">
                Schedule a private showroom visit or virtual consultation with our stone experts to discuss your upcoming architectural project.
              </p>
              <a 
                href="https://wa.me/9109078958414?text=Hello, I would like to book a showroom consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-black hover:text-gray-600 transition-colors"
              >
                Schedule Now
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Delivery Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="group relative bg-black p-10 md:p-14 overflow-hidden text-white hover:bg-zinc-900 transition-colors duration-500"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 transition-transform">
              <Truck className="w-64 h-64 text-white" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-full mb-8 shadow-xl">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Premium Delivery</h3>
              <p className="text-gray-400 mb-10 max-w-sm leading-relaxed">
                We offer specialized white-glove delivery logistics, ensuring your luxury materials arrive safely and on time at your site, nationwide.
              </p>
              <a 
                href="https://wa.me/9109078958414?text=Hello, I would like to inquire about delivery options and logistics."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-gray-300 transition-colors"
              >
                Delivery Logistics
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
