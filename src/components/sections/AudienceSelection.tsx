import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Key, ArrowRight } from 'lucide-react';

const audiences = [
  {
    id: 'business',
    title: 'I\'m a Business',
    icon: Building2,
    description: 'Commercial energy solutions, solar, battery storage, energy efficiency and funding.',
    cta: 'Explore Business Solutions',
    link: '/commercial-solar',
    color: 'from-blue-50 to-blue-100/50',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100'
  },
  {
    id: 'homeowner',
    title: 'I\'m a Homeowner',
    icon: Home,
    description: 'Solar, heating, insulation, energy efficiency and available funding.',
    cta: 'Explore Home Solutions',
    link: '/#homeowners',
    color: 'from-emerald-50 to-emerald-100/50',
    iconColor: 'text-emerald',
    iconBg: 'bg-emerald-light'
  },
  {
    id: 'landlord',
    title: 'I\'m a Landlord',
    icon: Key,
    description: 'Energy improvements, retrofit, compliance, funding and installer support.',
    cta: 'Explore Landlord Solutions',
    link: '/#landlords',
    color: 'from-orange-50 to-orange-100/50',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-100'
  }
];

export const AudienceSelection: React.FC = () => {
  return (
    <section className="relative z-20 -mt-8 pb-20">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <motion.a
              key={audience.id}
              href={audience.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-gradient-to-br ${audience.color} p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${audience.iconBg} ${audience.iconColor} transition-transform group-hover:scale-110`}>
                  <audience.icon size={28} />
                </div>
                
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-primary-navy">
                  {audience.title}
                </h3>
                
                <p className="mb-8 text-[15px] leading-relaxed text-slate-600 flex-grow">
                  {audience.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary-navy transition-colors group-hover:text-emerald mt-auto">
                  {audience.cta}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
