import React from 'react';
import { Home, ThermometerSnowflake, Wind, Flame, Sun, Battery, Settings, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: 'Loft Insulation',
      description: 'We connect you with accredited specialists to trap heat and lower your energy bills.',
      icon: Home,
    },
    {
      title: 'Cavity Wall Insulation',
      description: 'Get matched with trusted installers to prevent heat loss through your property walls.',
      icon: Wind,
    },
    {
      title: 'Solid Wall Insulation',
      description: 'Access experts who provide internal and external solid wall insulation solutions.',
      icon: ThermometerSnowflake,
    },
    {
      title: 'Heat Pumps',
      description: 'We find you accredited partners for Air Source and Ground Source Heat Pump installations.',
      icon: Settings,
    },
    {
      title: 'Solar Panels',
      description: 'Connect with top-rated solar professionals to generate your own clean, renewable energy.',
      icon: Sun,
    },
    {
      title: 'Battery Storage',
      description: 'We match you with experts who can add battery storage to maximize your solar investment.',
      icon: Battery,
    },
    {
      title: 'Boiler Upgrades',
      description: 'Find trusted engineers for high-efficiency boiler replacements and central heating upgrades.',
      icon: Flame,
    },
    {
      title: 'Retrofit Assessments',
      description: 'Comprehensive property evaluations by independent, certified retrofit assessors.',
      icon: ClipboardList,
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold tracking-tight text-emerald bg-emerald-light rounded-full"
          >
            Our Services
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 tracking-tight"
          >
            Energy efficiency solutions, delivered by experts.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-medium"
          >
            We don't install these measures ourselves. Instead, we act as your independent guide, matching you with the perfect accredited specialists for your specific needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-bg-grey p-8 rounded-3xl border border-slate-100 hover:border-emerald/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-emerald w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary-navy mb-3 tracking-tight group-hover:text-emerald transition-colors">{service.title}</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
