import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, ShieldCheck } from 'lucide-react';

interface AboutProps {
  titleTag?: 'h1' | 'h2';
}

export const AboutSection: React.FC<AboutProps> = ({ titleTag = 'h2' }) => {
  const Title = motion[titleTag];
  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format,compress&fit=crop&w=800&q=60" 
                  alt="Solar Installation" 
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-10 z-20 bg-white p-8 rounded-3xl shadow-2xl max-w-[280px] border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-solar-orange/10 rounded-2xl flex items-center justify-center text-solar-orange">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-solar-dark">70%</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Avg. Savings</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our customers save an average of 70% on their annual electricity costs.
              </p>
            </motion.div>

            <div className="absolute -top-10 -left-10 w-64 h-64 bg-solar-orange/10 rounded-full blur-3xl -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-solar-orange uppercase bg-solar-orange/10 rounded-full">
              About Us
            </div>
            <Title className="text-[clamp(2rem,4vw,3.25rem)] font-bold text-solar-dark mb-8 leading-[1.2] tracking-tight">
              Driving the transition to <span className="text-solar-orange">Clean Energy</span> since 2010.
            </Title>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
              Open Energy Solutions is dedicated to making solar power accessible, affordable, and efficient. We handle everything from the initial consultation and custom design to professional installation and ongoing maintenance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { label: 'MCS Certified Installers', icon: ShieldCheck },
                { label: 'Leading Efficiency Panels', icon: CheckCircle2 },
                { label: 'Dedicated Project Management', icon: Users },
                { label: 'Transparent Finance', icon: TrendingUp }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-solar-orange/20 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-solar-orange shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-solar-dark">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <a href="/about" className="inline-block px-8 py-4 bg-solar-dark text-white rounded-2xl font-bold hover:bg-solar-orange transition-all shadow-xl shadow-solar-dark/10">
              Read Our Full Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
