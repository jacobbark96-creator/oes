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
    <section id="accreditations" className="border-y border-slate-100 bg-white py-14 md:py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.24em] text-slate-400">
            All our partner installers are MCS Certified
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400/80">
            and hold industry-leading accreditations
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="col-span-2 flex items-center justify-center gap-2 rounded-[1.6rem] border border-slate-200 bg-bg-grey px-4 py-5 md:col-span-2"
          >
            <div className="rounded-md bg-[#E3000F] px-3 py-1 text-2xl font-black tracking-tighter text-white">
              MCS
            </div>
            <div className="flex flex-col pr-2 text-left leading-none">
              <span className="text-[11px] font-black tracking-widest text-[#E3000F]">CERTIFIED</span>
              <span className="text-[9px] font-bold tracking-wider text-[#E3000F]/80">INSTALLER</span>
            </div>
          </motion.div>

          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex min-h-[88px] items-center justify-center rounded-[1.6rem] border border-slate-200 bg-bg-grey px-5 py-4 text-center text-lg font-black tracking-tighter text-primary-navy"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
