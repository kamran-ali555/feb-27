import React, { useState } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Digital Marketing Strategist',
    company: 'Global Marketing Solutions',
    location: 'New York, NY',
    period: '2020 - Present',
    description: 'Led digital marketing strategies for Fortune 500 clients, resulting in an average 45% increase in online engagement and 30% growth in conversion rates.',
    achievements: [
      'Developed and executed comprehensive digital marketing campaigns across multiple channels',
      'Managed a team of 8 specialists to deliver integrated marketing solutions',
      'Implemented data-driven strategies that increased client ROI by an average of 35%'
    ]
  },
  {
    title: 'Digital Marketing Manager',
    company: 'Innovative Digital Agency',
    location: 'San Francisco, CA',
    period: '2017 - 2020',
    description: 'Oversaw digital marketing initiatives for tech startups and established brands, focusing on growth marketing and performance optimization.',
    achievements: [
      'Scaled marketing operations that contributed to 3 clients securing Series A funding',
      'Pioneered influencer marketing strategies that generated 2M+ impressions',
      'Optimized PPC campaigns resulting in 40% reduction in cost per acquisition'
    ]
  },
  {
    title: 'Social Media Specialist',
    company: 'Creative Marketing Co.',
    location: 'Chicago, IL',
    period: '2015 - 2017',
    description: 'Managed social media presence for diverse client portfolio, developing engaging content strategies and community management protocols.',
    achievements: [
      'Grew combined social following across all clients by 500K+ followers',
      'Created viral campaign that reached 5M+ users with a $10K budget',
      'Established social media guidelines adopted company-wide for all clients'
    ]
  }
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-fuchsia-500 bg-clip-text text-transparent">Professional Experience</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">A track record of success in developing and implementing effective digital marketing strategies.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                    activeExp === index 
                      ? 'bg-gradient-to-r from-teal-600/40 to-fuchsia-600/40 shadow-lg' 
                      : 'bg-indigo-800/40 hover:bg-indigo-700/40'
                  }`}
                  onClick={() => setActiveExp(index)}
                >
                  <div className="flex items-center mb-2">
                    <Briefcase className="h-5 w-5 text-teal-400 mr-2" />
                    <h3 className="font-semibold">{exp.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{exp.period}</span>
                    <MapPin className="h-3 w-3 ml-3 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Details */}
          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-fuchsia-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-indigo-800/90 p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold mb-2">{experiences[activeExp].title}</h3>
                <p className="text-teal-400 mb-4">{experiences[activeExp].company}</p>
                <div className="flex items-center text-sm text-gray-400 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{experiences[activeExp].period}</span>
                  <MapPin className="h-4 w-4 ml-6 mr-2" />
                  <span>{experiences[activeExp].location}</span>
                </div>
                <p className="text-gray-300 mb-6">{experiences[activeExp].description}</p>
                <h4 className="text-lg font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {experiences[activeExp].achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-teal-400 to-fuchsia-500 mt-2 mr-2"></span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;