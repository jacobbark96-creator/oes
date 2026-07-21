import React from 'react';
import { ShieldCheck, PoundSterling, Users, MapPin, Handshake } from 'lucide-react';
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
    <section className="bg-primary-dark py-12 relative z-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald mb-2">
                <item.icon size={24} strokeWidth={2} />
              </div>
              <span className="text-white font-medium text-sm sm:text-base">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
