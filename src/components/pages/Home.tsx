import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Finance } from '../components/sections/Finance';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-solar-orange z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="overflow-x-hidden bg-slate-50">
        <Hero />
        
        {/* About Section Upgrade - High Density Light Theme */}
        <section id="about" className="py-20 lg:py-24 bg-white relative border-y border-slate-100">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                  <img 
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern+office+meeting+two+people+discussing+solar+panels+blueprint+bright+daylight+professional+photography+light+theme&image_size=landscape_4_3" 
                    alt="Solar Consultation" 
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
                
                {/* Floating Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-8 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-[260px] border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-solar-orange border border-slate-100">
                      <Users size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900 tracking-tight">10k+</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Matches Made</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    We've connected thousands of homeowners with the perfect installers.
                  </p>
                </motion.div>

                <div className="absolute -top-10 -left-10 w-64 h-64 bg-slate-100 rounded-full blur-3xl -z-10" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold tracking-widest text-slate-600 uppercase bg-slate-100 rounded-full border border-slate-200">
                  Who we are
                </div>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                  We find the installer. <br />
                  <span className="text-solar-orange">You get the savings.</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium tracking-tight">
                  Open Energy Solutions is an independent matching service. We are not installers. We leverage our network of vetted, MCS-certified professionals to find you the best quotes, ensuring you get top-tier service without the hassle of comparing providers yourself.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { label: 'Strictly Vetted Installers', icon: ShieldCheck },
                    { label: 'Unbiased Comparisons', icon: TrendingUp },
                    { label: 'Free Matching Service', icon: CheckCircle2 },
                    { label: 'Dedicated Support', icon: Users }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-solar-orange/30 hover:bg-white transition-all group shadow-sm"
                    >
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-solar-orange shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                        <item.icon size={16} strokeWidth={2.5} />
                      </div>
                      <span className="font-bold text-slate-800 text-sm tracking-tight">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md text-sm">
                  Learn How It Works
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <Services />
        <Finance />
        
        {/* CTA Section Upgrade - Light Theme */}
        <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
          <div className="absolute inset-0 z-0">
             <img 
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=abstract+light+theme+geometric+shapes+white+and+very+light+orange+subtle+shadows+modern+minimalist&image_size=landscape_16_9" 
                alt="Background Pattern" 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent" />
          </div>

          <motion.div 
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-slate-200 rounded-full" 
          />
          <motion.div 
            animate={{ 
              rotate: [360, 0],
            }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-slate-200 rounded-full" 
          />
        
          <div className="container-wide text-center relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-solar-orange uppercase bg-orange-50 rounded-full border border-orange-100">
              Get Started
            </div>
            <motion.h2 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="text-[clamp(2.5rem,5vw,4rem)] font-black text-slate-900 mb-6 tracking-tighter leading-[1.05]"
             >
              Ready to find your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-amber-500">ideal installer?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium tracking-tight"
            >
              Skip the sales pitches. Let us match you with the best vetted professionals in your area for free.
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-solar-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 inline-flex items-center gap-2"
            >
              Get Your Free Matches
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
