import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const UKCoverage: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-white py-[4.5rem] md:py-20 lg:py-24">
      <div className="container relative z-10">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald">
              Nationwide Delivery
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-primary-navy md:text-4xl lg:text-[3.05rem]">
              Our trusted installer network covers the UK.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              No matter where you are based, our extensive network of fully accredited, highly rated installation partners ensures we can match you with local experts who understand your regional requirements.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['England', 'Scotland', 'Wales', 'Northern Ireland'].map((region, i) => (
                <div key={i} className="flex items-center gap-2 rounded-full border border-slate-200 bg-bg-grey px-4 py-2.5">
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
            <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-bg-grey shadow-[0_24px_80px_-36px_rgba(14,35,65,0.24)]">
              <img 
                src="/uk-map.jpg" 
                alt="Map representing our UK coverage" 
                className="aspect-[0.95] w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-navy/18 mix-blend-overlay" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
