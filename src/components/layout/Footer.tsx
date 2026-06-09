import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-solar-dark text-white pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-1 mb-8">
              <span className="text-3xl font-bold tracking-tight text-white">Openenergy</span>
              <span className="text-4xl font-black text-solar-orange leading-none translate-y-[2px]">.</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading the UK transition to clean, sustainable energy with professional solar installations and innovative energy solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-solar-orange transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-solar-orange transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-solar-orange transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-solar-orange transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#finance" className="hover:text-white transition-colors">Finance Options</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Residential Solar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EV Charging</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Battery Storage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
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
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Open Energy Solutions. All rights reserved.</p>
          <p>Open energy is proudly a part of the Open Group of companies</p>
        </div>
      </div>
    </footer>
  );
};
