import React from 'react';
import { motion } from 'framer-motion';

export const Accreditations: React.FC = () => {
  const logos = [
    "TrustMark",
    "PAS2035",
    "Constructionline",
    "CHAS",
    "ICO",
    "FCA"
  ];

  return (
    <section id="accreditations" className="py-12 md:py-16 bg-white border-y border-slate-100">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-2">
            All our partner installers are MCS Certified
          </p>
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-400/80">
            and hold industry-leading accreditations
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          
          {/* MCS Certified Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 border-2 border-[#E3000F] p-1.5 rounded-lg bg-white"
          >
            <div className="bg-[#E3000F] text-white font-black text-2xl px-3 py-1 rounded-md tracking-tighter">
              MCS
            </div>
            <div className="flex flex-col text-left leading-none pr-2">
              <span className="font-black text-[11px] text-[#E3000F] tracking-widest">CERTIFIED</span>
              <span className="font-bold text-[9px] text-[#E3000F]/80 tracking-wider">INSTALLER</span>
            </div>
          </motion.div>

          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center font-black text-xl text-primary-navy tracking-tighter"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
