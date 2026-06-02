import React from 'react';
import { Wizard } from '../wizard/Wizard';
import { ShieldCheck, Zap, TrendingDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-solar-dark pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80" 
          alt="Solar Panels" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-solar-dark via-solar-dark/95 to-solar-dark/80" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-solar-orange/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center py-10 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-white order-1 lg:order-1 mt-24 lg:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-solar-orange animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300">UK's #1 Solar Installer</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Power your home <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-amber-400">
                for free.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-light">
              State-of-the-art solar systems designed to slash your bills and carbon footprint. Join thousands of UK homeowners going green today.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-solar-orange backdrop-blur-md">
                  <ShieldCheck size={24} />
                </div>
                <span className="font-medium text-sm text-gray-300">25 Year Warranty</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-solar-orange backdrop-blur-md">
                  <TrendingDown size={24} />
                </div>
                <span className="font-medium text-sm text-gray-300">Up to 70% Savings</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-solar-orange backdrop-blur-md">
                  <Zap size={24} />
                </div>
                <span className="font-medium text-sm text-gray-300">Smart Battery Ready</span>
              </div>
            </div>
          </div>

          {/* Right Wizard Form */}
          <div className="lg:col-span-5 w-full order-2 lg:order-2 z-20 mb-20 lg:mb-0">
            <Wizard />
          </div>
          
        </div>
      </div>
    </section>
  );
};
