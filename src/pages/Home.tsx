import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Finance } from '../components/sections/Finance';

export const Home: React.FC = () => {
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

      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" 
                  alt="Solar Home" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-solar-orange/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-solar-green/10 rounded-full blur-3xl" />
              </div>
              
              <div>
                <h2 className="text-sm font-bold text-solar-orange uppercase tracking-widest mb-4">About Us</h2>
                <h3 className="text-4xl font-bold text-solar-dark mb-6 leading-tight">
                  Driving the transition to <span className="text-solar-orange">Clean Energy</span> since 2010.
                </h3>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Open Energy Solutions is dedicated to making solar power accessible, affordable, and efficient. We handle everything from the initial consultation and custom design to professional installation and ongoing maintenance.
                </p>
                
                <div className="space-y-6">
                  {[
                    'MCS Certified Installers',
                    'Leading efficiency solar panels',
                    'Dedicated project management',
                    'Transparent pricing & finance'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-solar-orange/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-solar-orange rounded-full" />
                      </div>
                      <span className="font-bold text-solar-dark">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Finance />
        
        <section className="py-24 bg-solar-orange relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start your solar journey?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join 5,000+ happy customers who have switched to clean, renewable energy with Open Energy Solutions.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-solar-orange px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl"
            >
              Get My Free Quote
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
