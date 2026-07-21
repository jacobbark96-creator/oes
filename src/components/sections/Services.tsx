import React from 'react';
import { Sun, Battery, Car, LineChart, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Residential Solar',
    description: 'Find installers offering bespoke solar panel systems tailored to your home\'s unique energy needs.',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format,compress&fit=crop&w=800&q=60',
    color: 'from-orange-500 to-amber-500'
  },
  {
    title: 'Commercial Solar',
    description: 'Connect with specialists in large-scale energy solutions to reduce business overheads and meet ESG goals.',
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format,compress&fit=crop&w=800&q=60',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'EV Charging',
    description: 'Compare quotes for fast, smart electric vehicle charging points integrated with your solar system.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format,compress&fit=crop&w=800&q=60',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Battery Storage',
    description: 'Get matched with experts who can add battery storage to store excess solar energy for use at night.',
    icon: Battery,
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format,compress&fit=crop&w=800&q=60',
    color: 'from-purple-500 to-indigo-500'
  }
];

interface ServicesProps {
  titleTag?: 'h1' | 'h2';
}

export const Services: React.FC<ServicesProps> = ({ titleTag = 'h2' }) => {
  const Title = motion[titleTag];
  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold tracking-widest text-slate-600 uppercase bg-slate-100 rounded-full border border-slate-200"
          >
            What we help you find
          </motion.div>
          <Title 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]"
          >
            Complete Energy Independence
          </Title>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight"
          >
            From panels to plugs, we match you with the best professionals providing the full ecosystem for a sustainable future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl border border-white/50 text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-6">
                <div className={`w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="text-solar-orange" size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-solar-orange transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-50 blur-3xl rounded-full -translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 -z-10" />
    </section>
  );
};
