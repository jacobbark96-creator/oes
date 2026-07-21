import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const UKCoverage: React.FC = () => {
  return (
    <section className="py-24 bg-white relative border-y border-slate-100 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
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
            <div className="relative w-full max-w-md aspect-square bg-bg-grey rounded-full border border-slate-100 shadow-glass flex items-center justify-center p-8">
              {/* Abstract Map Representation */}
              <div className="w-full h-full relative opacity-80">
                <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald/20">
                  <path d="M150 450 C 150 450, 180 400, 200 350 C 220 300, 250 250, 250 200 C 250 150, 220 100, 180 50 C 140 0, 100 50, 80 100 C 60 150, 80 200, 100 250 C 120 300, 100 350, 150 450 Z" fill="currentColor"/>
                </svg>
                
                {/* Pins */}
                {[
                  { top: '20%', left: '45%' },
                  { top: '35%', left: '55%' },
                  { top: '50%', left: '40%' },
                  { top: '65%', left: '60%' },
                  { top: '80%', left: '45%' },
                  { top: '45%', left: '70%' },
                  { top: '70%', left: '30%' },
                ].map((pos, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="absolute w-4 h-4 bg-emerald rounded-full shadow-md shadow-emerald/50"
                    style={pos}
                  >
                    <div className="absolute inset-0 bg-emerald rounded-full animate-ping opacity-50" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
