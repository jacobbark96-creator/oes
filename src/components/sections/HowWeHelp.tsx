import React from 'react';
import { FileCheck, Search, Users, LineChart, ClipboardCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowWeHelp: React.FC = () => {
  const cards = [
    {
      icon: FileCheck,
      title: 'Funding Eligibility Check',
      description: 'We assess your property to identify if you qualify for government grants like ECO4 or GBIS.'
    },
    {
      icon: Search,
      title: 'Independent Property Assessment',
      description: 'Our experts provide unbiased recommendations on the best energy efficiency upgrades for your home.'
    },
    {
      icon: Users,
      title: 'Installer Matching',
      description: 'We connect you exclusively with fully vetted, accredited installation partners from our nationwide network.'
    },
    {
      icon: LineChart,
      title: 'Quote Comparison',
      description: 'We help you compare quotes objectively to ensure you receive the best value and highest quality.'
    },
    {
      icon: ClipboardCheck,
      title: 'Project Coordination',
      description: 'Our team supports you throughout the entire journey, acting as your single point of contact.'
    },
    {
      icon: HeartHandshake,
      title: 'Aftercare Support',
      description: 'We ensure all installations meet strict quality standards and provide ongoing assistance post-installation.'
    }
  ];

  return (
    <section id="how-we-help" className="relative overflow-hidden bg-white py-[4.5rem] md:py-20 lg:py-24">
      <div className="container relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-3xl font-bold leading-tight tracking-tight text-primary-navy md:text-4xl lg:text-[3.2rem]"
          >
            Your independent energy consultancy.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-slate-600"
          >
            We guide you through the complex landscape of energy efficiency improvements, ensuring you get the best advice, funding, and trusted installers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 p-7 shadow-[0_18px_60px_-34px_rgba(14,35,65,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald/20 hover:shadow-[0_30px_70px_-38px_rgba(14,35,65,0.28)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-navy/[0.04] text-emerald transition-transform duration-300 group-hover:scale-105">
                <card.icon className="text-emerald w-7 h-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-primary-navy">
                {card.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
