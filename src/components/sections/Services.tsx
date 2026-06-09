import React from 'react';
import { Sun, Battery, Car, LineChart, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Residential Solar',
    description: 'Bespoke solar panel installations tailored to your home\'s energy needs and roof type.',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-500 to-amber-500'
  },
  {
    title: 'Commercial Solar',
    description: 'Large-scale energy solutions for businesses to reduce overheads and meet ESG goals.',
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'EV Charging',
    description: 'Fast, smart electric vehicle charging points integrated with your solar system.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Battery Storage',
    description: 'Store excess solar energy for use at night or during peak price periods.',
    icon: Battery,
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-500 to-indigo-500'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-solar-orange uppercase bg-solar-orange/10 rounded-full"
          >
            Our Services
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-solar-dark mb-8 tracking-tight"
          >
            Complete Energy Independence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            From panels to plugs, we provide the full ecosystem for a sustainable, low-cost energy future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="p-10">
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className="text-solar-orange" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-solar-dark mb-4 group-hover:text-solar-orange transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                <div className="w-12 h-1 bg-gray-200 group-hover:w-full group-hover:bg-solar-orange transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-solar-orange/5 blur-3xl rounded-full -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-solar-green/5 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />
    </section>
  );
};
