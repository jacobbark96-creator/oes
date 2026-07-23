import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const UKCoverage: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative border-y border-slate-100 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 tracking-tight leading-tight">
              Our trusted installer network covers the UK.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              No matter where you are based, our extensive network of fully accredited, highly rated installation partners ensures we can match you with local experts who understand your regional requirements.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['England', 'Scotland', 'Wales', 'Northern Ireland'].map((region, i) => (
                <div key={i} className="flex items-center gap-2 bg-bg-grey px-4 py-2 rounded-lg border border-slate-200">
                  <MapPin size={16} className="text-emerald" />
                  <span className="font-semibold text-primary-navy text-sm">{region}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square bg-bg-grey rounded-[2rem] border border-slate-100 shadow-glass overflow-hidden">
              <img 
                src="/uk-map.jpg" 
                alt="Map representing our UK coverage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-navy/10 mix-blend-overlay" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
