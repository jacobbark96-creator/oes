import React from 'react';
import { Home, ThermometerSnowflake, Wind, Flame, Sun, Battery, Settings, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      id: 'loft',
      title: 'Loft Insulation',
      description: 'We connect you with accredited specialists to trap heat and lower your energy bills.',
      icon: Home,
    },
    {
      id: 'wall',
      title: 'Cavity Wall Insulation',
      description: 'Get matched with trusted installers to prevent heat loss through your property walls.',
      icon: Wind,
    },
    {
      id: 'solid-wall',
      title: 'Solid Wall Insulation',
      description: 'Access experts who provide internal and external solid wall insulation solutions.',
      icon: ThermometerSnowflake,
    },
    {
      id: 'heat-pumps',
      title: 'Heat Pumps',
      description: 'We find you accredited partners for Air Source and Ground Source Heat Pump installations.',
      icon: Settings,
    },
    {
      id: 'solar',
      title: 'Solar Panels',
      description: 'Connect with top-rated solar professionals to generate your own clean, renewable energy.',
      icon: Sun,
    },
    {
      id: 'battery',
      title: 'Battery Storage',
      description: 'We match you with experts who can add battery storage to maximize your solar investment.',
      icon: Battery,
    },
    {
      id: 'boiler',
      title: 'Boiler Upgrades',
      description: 'Find trusted engineers for high-efficiency boiler replacements and central heating upgrades.',
      icon: Flame,
    },
    {
      id: 'retrofit',
      title: 'Retrofit Assessments',
      description: 'Comprehensive property evaluations by independent, certified retrofit assessors.',
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
            Energy efficiency solutions, delivered by experts.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We don't install these measures ourselves. Instead, we act as your independent guide, matching you with the perfect accredited specialists for your specific needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
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
