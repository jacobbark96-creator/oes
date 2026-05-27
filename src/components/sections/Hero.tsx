import React from 'react';
import { Wizard } from '../wizard/Wizard';
import { ShieldCheck, Zap, TrendingDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80" 
          alt="Solar Panels" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solar-dark/90 via-solar-dark/70 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-solar-orange/20 rounded-full border border-solar-orange/30 mb-8">
              <Zap size={18} className="text-solar-orange" />
              <span className="text-sm font-bold uppercase tracking-widest text-solar-orange">Premium Solar Installations</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Power Your Home <br />
              <span className="text-solar-orange">For Free.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              Open Energy Solutions provides state-of-the-art solar systems designed to slash your bills and carbon footprint. Join thousands of UK homeowners going green.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <ShieldCheck className="text-solar-orange" size={24} />
                </div>
                <span className="font-medium">25 Year Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <TrendingDown className="text-solar-orange" size={24} />
                </div>
                <span className="font-medium">Up to 70% Savings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Zap className="text-solar-orange" size={24} />
                </div>
                <span className="font-medium">Smart Battery Ready</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Wizard />
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-solar-orange/20 blur-[120px] rounded-full -mr-32 -mb-32" />
    </section>
  );
};
