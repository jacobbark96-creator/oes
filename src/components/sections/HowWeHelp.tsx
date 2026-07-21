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
    <section id="how-we-help" className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold tracking-tight text-emerald bg-emerald-light rounded-full"
          >
            How We Help
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 tracking-tight leading-tight"
          >
            Your independent energy consultancy.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed font-normal"
          >
            We guide you through the complex landscape of energy efficiency improvements, ensuring you get the best advice, funding, and trusted installers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-bg-grey rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary-navy/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="text-emerald w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-3 tracking-tight">
                {card.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
