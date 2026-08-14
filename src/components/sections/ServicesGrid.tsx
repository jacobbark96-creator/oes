import React from 'react';
import { Home, ThermometerSnowflake, Wind, Flame, Sun, Battery, Settings, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      id: 'solar',
      title: 'Solar Panels',
      description: 'Generate your own clean energy and significantly reduce electricity costs.',
      icon: Sun,
    },
    {
      id: 'battery',
      title: 'Battery Storage',
      description: 'Store excess solar energy or cheap off-peak grid electricity for when you need it.',
      icon: Battery,
    },
    {
      id: 'heat-pumps',
      title: 'Heat Pumps',
      description: 'Highly efficient, low-carbon heating systems for modern homes and businesses.',
      icon: Settings,
    },
    {
      id: 'insulation',
      title: 'Insulation',
      description: 'Stop heat escaping. Loft, cavity wall, and solid wall insulation solutions.',
      icon: Wind,
    },
    {
      id: 'boiler',
      title: 'Boiler Upgrades',
      description: 'High-efficiency boiler replacements to reduce gas consumption and heating bills.',
      icon: Flame,
    },
    {
      id: 'retrofit',
      title: 'Retrofit Assessments',
      description: 'Comprehensive property evaluations to identify the best efficiency improvements.',
      icon: ClipboardList,
    }
  ];

  return (
    <section id="services" className="relative bg-white py-[4.5rem] md:py-20 lg:py-24">
      <div className="container relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-3xl font-bold tracking-tight text-primary-navy md:text-4xl lg:text-[3.1rem]"
          >
            Our Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We help you understand which energy solutions make sense for your property, and then connect you with the right accredited installation partners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.a 
              href={`/services/${service.id}`}
              key={index}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="block group"
            >
              <SpotlightCard className="h-full rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-7 shadow-[0_18px_60px_-36px_rgba(14,35,65,0.22)] transition-all duration-300 group-hover:border-emerald/30 group-hover:shadow-[0_30px_70px_-38px_rgba(14,35,65,0.28)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-navy/[0.04] shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="text-emerald w-6 h-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-tight text-primary-navy transition-colors group-hover:text-emerald">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
              </SpotlightCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
