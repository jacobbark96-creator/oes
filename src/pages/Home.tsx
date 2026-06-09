import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Finance } from '../components/sections/Finance';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Helmet>
        <title>Open Energy Solutions | UK Premium Solar Installer</title>
        <meta name="description" content="Open Energy Solutions (OES) provides top-tier solar installations, battery storage, and EV charging solutions across the UK. Get a free quote today!" />
        <meta name="keywords" content="solar installation, uk solar installer, solar panels, ev chargers, battery storage, renewable energy, solar finance, ppa solar" />
        <meta property="og:title" content="Open Energy Solutions | UK Premium Solar Installer" />
        <meta property="og:description" content="Switch to solar with OES. Professional installation and flexible finance options for homes and businesses." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href="https://openenergyservices.co.uk" />
      </Helmet>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-solar-orange z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="overflow-x-hidden">
        <Hero />
        
        {/* About Section Upgrade */}
        <section id="about" className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80" 
                    alt="Solar Home" 
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating Card */}
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
                <h2 className="text-5xl md:text-6xl font-bold text-solar-dark mb-8 leading-[1.1] tracking-tight">
                  Driving the transition to <span className="text-solar-orange">Clean Energy</span> since 2010.
                </h2>
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

                <button className="px-8 py-4 bg-solar-dark text-white rounded-2xl font-bold hover:bg-solar-orange transition-all shadow-xl shadow-solar-dark/10">
                  Read Our Full Story
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <Services />
        <Finance />
        
        {/* CTA Section Upgrade */}
        <section className="py-32 bg-solar-orange relative overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-white/10 rounded-full" 
          />
          <motion.div 
            animate={{ 
              rotate: [360, 0],
            }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-white/10 rounded-full" 
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
              Ready to start your <br /> solar journey?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light"
            >
              Join 5,000+ happy customers who have switched to clean, renewable energy with Open Energy Solutions.
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-solar-dark px-12 py-5 rounded-[2rem] font-bold text-xl hover:bg-gray-50 transition-all shadow-2xl"
            >
              Get My Free Quote
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
