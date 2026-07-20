import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-900 pt-20 pb-10 border-t border-slate-200">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-1 mb-8">
              <span className="text-3xl font-black tracking-tighter text-slate-900">Openenergy</span>
              <span className="text-4xl font-black text-solar-orange leading-none translate-y-[2px]">.</span>
            </div>
            <p className="text-slate-600 mb-6 font-medium tracking-tight">
              Leading the UK transition to clean energy by connecting you with the best vetted, independent solar professionals—100% free of charge.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="p-2 bg-white border border-slate-200 rounded-xl hover:border-solar-orange hover:text-solar-orange transition-colors shadow-sm"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="p-2 bg-white border border-slate-200 rounded-xl hover:border-solar-orange hover:text-solar-orange transition-colors shadow-sm"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram" className="p-2 bg-white border border-slate-200 rounded-xl hover:border-solar-orange hover:text-solar-orange transition-colors shadow-sm"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 bg-white border border-slate-200 rounded-xl hover:border-solar-orange hover:text-solar-orange transition-colors shadow-sm"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black mb-6 tracking-widest uppercase text-slate-400">Quick Links</h2>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li><a href="/services" className="hover:text-solar-orange transition-colors">Services</a></li>
              <li><a href="/finance" className="hover:text-solar-orange transition-colors">Finance Options</a></li>
              <li><a href="/about" className="hover:text-solar-orange transition-colors">About Us</a></li>
              <li><a href="/privacy" className="hover:text-solar-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-black mb-6 tracking-widest uppercase text-slate-400">Services</h2>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li><a href="#" className="hover:text-solar-orange transition-colors">Residential Solar</a></li>
              <li><a href="#" className="hover:text-solar-orange transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="hover:text-solar-orange transition-colors">EV Charging</a></li>
              <li><a href="#" className="hover:text-solar-orange transition-colors">Battery Storage</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-black mb-6 tracking-widest uppercase text-slate-400">Contact Us</h2>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-solar-orange" />
                <span>welcome@openenergy.co.uk</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-solar-orange" />
                <span>+44 161 524 5535</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin size={24} className="text-solar-orange flex-shrink-0" />
                <span>20 Wenlock Road, London, N1 7GU</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 py-12">
          <h2 className="text-sm font-black mb-8 tracking-widest uppercase text-slate-400">Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              'London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 
              'Liverpool', 'Newcastle', 'Sheffield', 'Bristol', 'Edinburgh'
            ].map((city) => (
              <a 
                key={city} 
                href={`/solar-panels-${city.toLowerCase()}`}
                className="text-slate-500 font-medium hover:text-solar-orange text-sm transition-colors"
              >
                Solar Panels {city}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Open Energy Solutions. All rights reserved.</p>
          <p>Open energy is proudly a part of the Open Group of companies</p>
        </div>
      </div>
    </footer>
  );
};
