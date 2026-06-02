import React from 'react';
import { Sun, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-1">
            <span className="text-2xl md:text-3xl font-bold tracking-tight text-black">Openenergy</span>
            <span className="text-3xl md:text-4xl font-black text-solar-orange leading-none translate-y-[2px]">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-solar-orange transition-colors">Services</a>
            <a href="#finance" className="text-gray-600 hover:text-solar-orange transition-colors">Finance</a>
            <a href="#about" className="text-gray-600 hover:text-solar-orange transition-colors">About</a>
            <button className="bg-solar-orange text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#services" className="block px-3 py-2 text-gray-600" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#finance" className="block px-3 py-2 text-gray-600" onClick={() => setIsOpen(false)}>Finance</a>
            <a href="#about" className="block px-3 py-2 text-gray-600" onClick={() => setIsOpen(false)}>About</a>
            <button className="w-full mt-4 bg-solar-orange text-white px-6 py-3 rounded-xl font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
