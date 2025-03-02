import React from 'react';
import { TrendingUp, BarChart, Share2, Globe, Target, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="h-10 w-10 text-teal-400 group-hover:text-white transition-colors duration-300" />,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with our data-driven SEO strategies that drive organic traffic and improve rankings.'
  },
  {
    icon: <BarChart className="h-10 w-10 text-teal-400 group-hover:text-white transition-colors duration-300" />,
    title: 'Analytics & Reporting',
    description: 'Gain valuable insights with comprehensive analytics and detailed reports to optimize your marketing efforts.'
  },
  {
    icon: <Share2 className="h-10 w-10 text-teal-400 group-hover:text-white transition-colors duration-300" />,
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand awareness through strategic social media campaigns and content.'
  },
  {
    icon: <Globe className="h-10 w-10 text-teal-400 group-hover:text-white transition-colors duration-300" />,
    title: 'Content Marketing',
    description: 'Create compelling content that resonates with your audience and drives conversions across all platforms.'
  },
  {
    icon: <Target className="h-10 w-10 text-teal-400 group-hover:text-white transition-colors duration-300" />,
    title: 'PPC Advertising',
    description: 'Maximize ROI with targeted pay-per-click campaigns that reach your ideal customers at the right time.'
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-teal-400 group-hover:text-white transition-colors duration-300" />,
    title: 'Email Marketing',
    description: 'Nurture leads and boost customer retention with personalized email campaigns that deliver results.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-fuchsia-500 bg-clip-text text-transparent">Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Comprehensive digital marketing solutions tailored to elevate your brand's online presence and drive measurable results.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-indigo-800/80 to-indigo-900/80 p-8 rounded-xl shadow-lg hover:shadow-teal-500/20 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm border border-indigo-700/50 hover:border-teal-500/50"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;