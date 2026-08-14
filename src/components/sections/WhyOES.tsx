import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const WhyOES: React.FC = () => {
  const benefits = [
    "Independent recommendations",
    "Trusted nationwide installer network",
    "Government funding specialists",
    "No pressure sales",
    "Dedicated project support",
    "One point of contact"
  ];

  return (
    <section className="relative overflow-hidden bg-bg-grey py-[4.5rem] md:py-20 lg:py-24">
      <div className="container relative z-10">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_30px_90px_-38px_rgba(14,35,65,0.3)]">
              <img 
                src="/professional-consultant.jpg" 
                alt="Professional Energy Consultant" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy/40 to-transparent" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald">
              Why Clients Start With Us
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary-navy md:text-4xl lg:text-[3.1rem]">
              The smart way to improve your property.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              We remove the stress and confusion from home energy improvements. By acting as your independent advisor, we ensure you get the right solution, the maximum available funding, and a flawless installation from a vetted partner.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/72 px-4 py-3 shadow-sm backdrop-blur-sm">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-light">
                    <CheckCircle2 size={14} className="text-emerald" />
                  </div>
                  <span className="text-sm font-semibold text-primary-navy sm:text-[15px]">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
