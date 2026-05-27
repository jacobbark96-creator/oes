import React from 'react';
import { Sun, Battery, Car, LineChart } from 'lucide-react';

const services = [
  {
    title: 'Residential Solar',
    description: 'Bespoke solar panel installations tailored to your home\'s energy needs and roof type.',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Commercial Solar',
    description: 'Large-scale energy solutions for businesses to reduce overheads and meet ESG goals.',
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'EV Charging',
    description: 'Fast, smart electric vehicle charging points integrated with your solar system.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Battery Storage',
    description: 'Store excess solar energy for use at night or during peak price periods.',
    icon: Battery,
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-solar-orange uppercase tracking-widest mb-4">Our Services</h2>
          <p className="text-4xl md:text-5xl font-bold text-solar-dark mb-6">Complete Energy Independence</p>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From panels to plugs, we provide the full ecosystem for a sustainable, low-cost energy future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-solar-orange transition-colors">
                  <service.icon className="text-solar-orange group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold text-solar-dark mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
