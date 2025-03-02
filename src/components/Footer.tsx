import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-950 pt-16 pb-8 border-t border-indigo-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-teal-400 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-fuchsia-500 bg-clip-text text-transparent">MarketPro</span>
            </div>
            <p className="text-gray-400 mb-6">Elevating brands through innovative digital marketing strategies that drive measurable results.</p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['SEO Optimization', 'Content Marketing', 'Social Media', 'PPC Advertising', 'Email Marketing', 'Analytics & Reporting'].map((service) => (
                <li key={service}>
                  <a 
                    href={`#services`}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest marketing insights and tips.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-indigo-800 border border-indigo-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-teal-600 to-fuchsia-600 text-white px-4 rounded-r-lg hover:from-teal-700 hover:to-fuchsia-700 transition-colors duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} MarketPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;