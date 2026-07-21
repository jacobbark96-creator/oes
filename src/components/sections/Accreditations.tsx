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
    <section id="accreditations" className="py-16 bg-white border-y border-slate-100">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-widest uppercase text-slate-400">
            Our trusted installation partners hold industry-leading accreditations
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
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
