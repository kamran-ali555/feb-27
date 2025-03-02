import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-fuchsia-500 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Ready to elevate your digital marketing strategy? Let's discuss how we can help you achieve your goals.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-indigo-800/80 to-indigo-900/80 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-indigo-700/50 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">Fill out the form or contact us directly using the information below.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-500/20 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                    <p className="text-white">contact@marketpro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-500/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-500/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-1">Office</h4>
                    <p className="text-white">123 Marketing Street, Suite 456<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social}
                      href={`#${social}`}
                      className="bg-indigo-800 hover:bg-teal-600 transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center"
                    >
                      <span className="sr-only">{social}</span>
                      <i className={`fab fa-${social} text-white`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-fuchsia-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-indigo-800/90 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                {submitted ? (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
                    <p className="text-green-400 font-medium">Thank you for your message! We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-indigo-700/50 border border-indigo-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-indigo-700/50 border border-indigo-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-indigo-700/50 border border-indigo-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Proposal">Project Proposal</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Career">Career Opportunity</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-indigo-700/50 border border-indigo-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-teal-600 to-fuchsia-600 hover:from-teal-700 hover:to-fuchsia-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;