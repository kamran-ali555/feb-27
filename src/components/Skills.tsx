import React, { useEffect, useRef } from 'react';

const skills = [
  { name: 'SEO & SEM', level: 95 },
  { name: 'Social Media Marketing', level: 90 },
  { name: 'Content Strategy', level: 85 },
  { name: 'Data Analytics', level: 80 },
  { name: 'Email Marketing', level: 85 },
  { name: 'PPC Advertising', level: 90 },
  { name: 'Marketing Automation', level: 75 },
  { name: 'Conversion Optimization', level: 85 }
];

const tools = [
  { name: 'Google Analytics', level: 90 },
  { name: 'SEMrush', level: 85 },
  { name: 'HubSpot', level: 80 },
  { name: 'Adobe Creative Suite', level: 75 },
  { name: 'Mailchimp', level: 90 },
  { name: 'Google Ads', level: 85 },
  { name: 'Ahrefs', level: 80 },
  { name: 'Hootsuite', level: 85 }
];

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${bar.getAttribute('data-width')}%`;
                (bar as HTMLElement).style.opacity = '1';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-indigo-800/50 to-violet-900/30 backdrop-blur-sm">
      <div className="container mx-auto" ref={skillsRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-fuchsia-500 bg-clip-text text-transparent">Skills & Expertise</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Specialized skills and proficiency in digital marketing tools that drive exceptional results.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Marketing Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Marketing Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-teal-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-indigo-700 rounded-full overflow-hidden">
                    <div 
                      className="progress-bar h-full bg-gradient-to-r from-teal-500 to-fuchsia-500 rounded-full opacity-0 transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                      data-width={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Software */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Tools & Software</h3>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{tool.name}</span>
                    <span className="text-teal-400">{tool.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-indigo-700 rounded-full overflow-hidden">
                    <div 
                      className="progress-bar h-full bg-gradient-to-r from-teal-500 to-fuchsia-500 rounded-full opacity-0 transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                      data-width={tool.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Skills Badges */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Brand Strategy', 'Market Research', 'A/B Testing', 'Influencer Marketing', 
              'Video Marketing', 'Mobile Marketing', 'E-commerce', 'Lead Generation',
              'Copywriting', 'UX/UI Design', 'CRM Management', 'Affiliate Marketing'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-teal-600/30 to-fuchsia-600/30 rounded-full text-sm border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 hover:shadow-glow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;