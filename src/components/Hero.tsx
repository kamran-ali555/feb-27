import React from 'react';
import { ArrowRight, BarChart2, Zap, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevate Your <span className="bg-gradient-to-r from-teal-400 to-fuchsia-500 bg-clip-text text-transparent">Digital Presence</span> With Strategic Marketing
            </h1>
            
            <p className="text-lg text-gray-300 mb-8">
              Transforming brands through innovative digital marketing strategies that drive measurable results and sustainable growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-fuchsia-600 rounded-lg font-medium flex items-center hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a 
                href="#services" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '200+', label: 'Projects Completed' },
                { value: '95%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-fuchsia-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-fuchsia-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-indigo-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { 
                      icon: <BarChart2 className="h-8 w-8 text-teal-400" />, 
                      title: 'Data-Driven', 
                      desc: 'Strategies backed by analytics' 
                    },
                    { 
                      icon: <Zap className="h-8 w-8 text-fuchsia-400" />, 
                      title: 'Fast Results', 
                      desc: 'Quick implementation & optimization' 
                    },
                    { 
                      icon: <Target className="h-8 w-8 text-teal-400" />, 
                      title: 'Targeted', 
                      desc: 'Reach your ideal audience' 
                    },
                    { 
                      icon: <ArrowRight className="h-8 w-8 text-fuchsia-400" />, 
                      title: 'Scalable', 
                      desc: 'Solutions that grow with you' 
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <div className="mb-3">{item.icon}</div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-sm text-gray-400 mb-2">Trusted by leading brands</p>
                  <div className="flex justify-between items-center">
                    {['Google', 'Adobe', 'Shopify', 'Slack'].map((brand, index) => (
                      <div key={index} className="text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity">
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;