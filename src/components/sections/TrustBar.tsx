import React from 'react';
import { ShieldCheck, PoundSterling, Users, MapPin, Handshake, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustBar: React.FC = () => {
  const items = [
    { icon: ShieldCheck, text: "Independent Advice" },
    { icon: PoundSterling, text: "Government Funding Experts" },
    { icon: Users, text: "Trusted Installer Network" },
    { icon: MapPin, text: "Nationwide Coverage" },
    { icon: Handshake, text: "End-to-End Support" },
  ];

  return (
    <section className="relative z-20 -mt-3 bg-transparent pb-6 md:pb-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-primary-navy/10 bg-white/88 p-5 shadow-[0_26px_80px_-34px_rgba(14,35,65,0.24)] backdrop-blur-xl md:grid-cols-3 md:gap-5 md:p-6 lg:grid-cols-6">
          
          {/* Reviews Widget Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-emerald/5 px-3 py-2 text-center border border-emerald/20 lg:border-r-slate-200 lg:border-transparent lg:rounded-none lg:bg-transparent"
          >
            <div className="flex gap-1 text-emerald mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-bold text-primary-navy">5.0 Rating</span>
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Based on Reviews</span>
          </motion.div>

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-2xl px-3 py-2 text-center"
            >
              <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-light text-emerald">
                <item.icon size={24} strokeWidth={2} />
              </div>
              <span className="text-sm font-semibold text-primary-navy sm:text-[15px]">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
