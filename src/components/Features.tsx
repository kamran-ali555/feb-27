import React, { useState } from 'react';
import { Zap, Award, Clock, Users, Lightbulb, Repeat } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Fast Turnaround',
    description: 'Quick implementation of marketing strategies with rapid results and continuous optimization.'
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Award-Winning Campaigns',
    description: 'Recognized excellence in creating innovative and effective marketing campaigns.'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance and monitoring to ensure your marketing never stops working.'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Dedicated Team',
    description: 'A specialized team of experts assigned to your account for personalized service.'
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Innovative Strategies',
    description: 'Cutting-edge approaches that keep you ahead of trends and competition.'
  },
  {
    icon: <Repeat className="h-8 w-8" />,
    title: 'Continuous Optimization',
    description: 'Ongoing refinement of campaigns based on performance data and market changes.'
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-indigo-800/50 to-violet-900/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-fuchsia-500 bg-clip-text text-transparent">Why Choose Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Our unique approach combines creativity, data, and expertise to deliver exceptional results for your business.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer p-6 rounded-xl transition-all duration-300 transform ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-teal-600/40 to-fuchsia-600/40 scale-105 shadow-lg' 
                      : 'bg-indigo-800/40 hover:bg-indigo-700/40'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={`mb-4 text-teal-400 ${activeFeature === index ? 'animate-pulse' : ''}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-fuchsia-600 rounded-2xl blur opacity-75 animate-pulse"></div>
              <div className="relative bg-indigo-800 p-8 rounded-2xl">
                <div className="mb-6 text-teal-400">
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                <p className="text-gray-300 mb-6">{features[activeFeature].description}</p>
                <div className="bg-gradient-to-r from-teal-500 to-fuchsia-500 h-1 w-20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;