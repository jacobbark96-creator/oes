import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, CheckCircle, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-navy text-white pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2 pr-0 lg:pr-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <CheckCircle className="text-emerald w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Open Energy Services
              </span>
            </div>
            <p className="text-slate-300 mb-8 font-normal leading-relaxed">
              We are an independent energy consultancy helping homeowners, landlords, and businesses access government funding and connect with trusted, accredited installation partners across the UK.
            </p>
            
            {/* Trustpilot Badge */}
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="bg-[#00B67A] p-1 rounded-sm">
                    <Star className="text-white w-4 h-4 fill-current" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">Excellent</span> based on 1,200+ reviews
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="p-2.5 bg-primary-dark rounded-xl hover:bg-emerald transition-colors"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter" className="p-2.5 bg-primary-dark rounded-xl hover:bg-emerald transition-colors"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram" className="p-2.5 bg-primary-dark rounded-xl hover:bg-emerald transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="p-2.5 bg-primary-dark rounded-xl hover:bg-emerald transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-6 tracking-wider uppercase text-slate-400">Company</h3>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><a href="#about" className="hover:text-emerald transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald transition-colors">How It Works</a></li>
              <li><a href="#accreditations" className="hover:text-emerald transition-colors">Accreditations</a></li>
              <li><a href="#reviews" className="hover:text-emerald transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-6 tracking-wider uppercase text-slate-400">Services</h3>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><a href="#services" className="hover:text-emerald transition-colors">Loft Insulation</a></li>
              <li><a href="#services" className="hover:text-emerald transition-colors">Wall Insulation</a></li>
              <li><a href="#services" className="hover:text-emerald transition-colors">Heat Pumps</a></li>
              <li><a href="#services" className="hover:text-emerald transition-colors">Solar Panels</a></li>
              <li><a href="#funding" className="hover:text-emerald transition-colors">Government Funding</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-6 tracking-wider uppercase text-slate-400">Contact</h3>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-emerald mt-1 flex-shrink-0" />
                <a href="mailto:welcome@openenergyservices.co.uk" className="hover:text-emerald transition-colors break-words">
                  welcome@openenergyservices.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald flex-shrink-0" />
                <a href="tel:+441615245535" className="hover:text-emerald transition-colors">
                  +44 161 524 5535
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald mt-1 flex-shrink-0" />
                <span>1 St Peter's Square,<br />Manchester, M2 3DE</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-400">
          <p>© {new Date().getFullYear()} Open Energy Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-emerald transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-emerald transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
