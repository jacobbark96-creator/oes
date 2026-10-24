import React from 'react';
import { motion } from 'framer-motion';

export const Accreditations: React.FC = () => {
  const logos = [
    { name: "MCS", src: "/accreditations/mcs.png" },
    { name: "TrustMark", src: "/accreditations/trustmark.png" },
    { name: "PAS2035", src: "/accreditations/pas2035.png" },
    { name: "Constructionline", src: "/accreditations/constructionline.png" },
    { name: "CHAS", src: "/accreditations/chas.png" },
    { name: "ICO", src: "/accreditations/ico.png" },
    { name: "FCA", src: "/accreditations/fca.png" }
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
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex h-[80px] w-[130px] md:h-[90px] md:w-[150px] items-center justify-center rounded-[1.6rem] border border-slate-200 bg-bg-grey px-4 py-3 transition-all duration-300 hover:border-emerald/30 hover:bg-white hover:shadow-[0_8px_30px_-12px_rgba(26,174,99,0.2)]"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} Accreditation`}
                loading="lazy"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <span className="hidden text-center text-sm md:text-base font-black tracking-tighter text-slate-500 group-hover:text-primary-navy">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
