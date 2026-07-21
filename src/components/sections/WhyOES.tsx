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
    <section className="py-16 md:py-20 lg:py-24 bg-bg-grey relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format,compress&fit=crop&w=1200&q=80" 
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-8 tracking-tight leading-tight">
              The smart way to improve your property.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              We remove the stress and confusion from home energy improvements. By acting as your independent advisor, we ensure you get the right solution, the maximum available funding, and a flawless installation from a vetted partner.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-light flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-emerald" />
                  </div>
                  <span className="font-semibold text-primary-navy text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
