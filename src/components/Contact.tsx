import React, { useEffect, useRef, useState } from 'react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-dark to-cyber-card opacity-50"></div>
      
      <div className={`max-w-6xl mx-auto relative z-10 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-cyber font-black glitch text-cyber-red" 
              data-text="> CONTACT"
              style={{
                textShadow: '0 0 10px #ff0055, 0 0 20px #ff0055, 0 0 40px #ff0055'
              }}>
            {'>'} CONTACT
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber-red via-cyber-pink to-cyber-purple mt-4" style={{
            boxShadow: '0 0 10px #ff0055, 0 0 20px #ff10f0'
          }}></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-cyber-card/50 backdrop-blur-sm p-8 border-2 border-cyber-green/50 hover:border-cyber-green glitch-hover"
                 style={{
                   boxShadow: 'inset 0 0 20px rgba(0, 255, 65, 0.1), 0 0 20px rgba(0, 255, 65, 0.2)'
                 }}>
              <h3 className="text-xl font-cyber font-bold text-cyber-green mb-8 flex items-center"
                  style={{
                    textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41'
                  }}>
                <span className="text-cyber-yellow mr-2">{'>'}</span>
                TRANSMISSION_CHANNELS
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-cyber-yellow mr-3 font-mono text-lg">{'>'}</span>
                  <div>
                    <p className="font-mono text-sm text-cyber-primary/60 mb-1">EMAIL</p>
                    <p className="font-mono text-cyber-green">john.doe@cybernet.void</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-cyber-yellow mr-3 font-mono text-lg">{'>'}</span>
                  <div>
                    <p className="font-mono text-sm text-cyber-primary/60 mb-1">LOCATION</p>
                    <p className="font-mono text-cyber-green">Neo Tokyo, Sector 7</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-cyber-yellow mr-3 font-mono text-lg">{'>'}</span>
                  <div>
                    <p className="font-mono text-sm text-cyber-primary/60 mb-1">STATUS</p>
                    <p className="font-mono text-cyber-yellow animate-pulse">ONLINE 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cyber-card/50 backdrop-blur-sm p-8 border-2 border-cyber-purple/50 hover:border-cyber-purple glitch-hover"
                 style={{
                   boxShadow: 'inset 0 0 20px rgba(176, 0, 255, 0.1), 0 0 20px rgba(176, 0, 255, 0.2)'
                 }}>
              <h3 className="text-xl font-cyber font-bold text-cyber-purple mb-8 flex items-center"
                  style={{
                    textShadow: '0 0 10px #b000ff, 0 0 20px #b000ff'
                  }}>
                <span className="text-cyber-yellow mr-2">{'>'}</span>
                SOCIAL_LINKS
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: 'GitHub', handle: '@johndoe', color: 'cyber-green' },
                  { name: 'LinkedIn', handle: '/in/johndoe', color: 'cyber-primary' },
                  { name: 'Twitter', handle: '@johndoe_dev', color: 'cyber-yellow' },
                  { name: 'Discord', handle: 'JohnDoe#0001', color: 'cyber-purple' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-4 py-3 font-mono text-sm bg-${social.color}/5 border border-${social.color}/30 text-${social.color} hover:border-${social.color} hover:bg-${social.color}/10 transition-all duration-300 glitch-hover`}
                  >
                    {'>'} {social.name}: <span className="text-cyber-red">{social.handle}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-cyber-card/50 backdrop-blur-sm p-8 border-2 border-cyber-red/50 hover:border-cyber-red glitch-hover"
               style={{
                 boxShadow: 'inset 0 0 20px rgba(255, 0, 85, 0.1), 0 0 20px rgba(255, 0, 85, 0.2)'
               }}>
            <h3 className="text-xl font-cyber font-bold text-cyber-red mb-8 flex items-center"
                style={{
                  textShadow: '0 0 10px #ff0055, 0 0 20px #ff0055'
                }}>
              <span className="text-cyber-yellow mr-2">{'>'}</span>
              SEND_MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-sm text-cyber-yellow/80 mb-2">
                  {'>'} NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-darker border border-cyber-green/30 text-cyber-green font-mono focus:border-cyber-green focus:outline-none transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm text-cyber-yellow/80 mb-2">
                  {'>'} EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-darker border border-cyber-green/30 text-cyber-green font-mono focus:border-cyber-green focus:outline-none transition-all duration-300"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm text-cyber-yellow/80 mb-2">
                  {'>'} MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-cyber-darker border border-cyber-green/30 text-cyber-green font-mono focus:border-cyber-green focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Type your message here..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 font-mono text-lg border-2 border-cyber-red text-cyber-red hover:bg-cyber-red/10 transition-all duration-300 glitch-hover"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(255, 0, 85, 0.3), 0 0 20px rgba(255, 0, 85, 0.3)'
                }}
              >
                {'>'} TRANSMIT_MESSAGE
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-mono text-cyber-primary/60">
            {'>'} SYSTEM_MESSAGE: <span className="text-cyber-green animate-pulse" style={{
              textShadow: '0 0 10px #00ff41'
            }}>CONNECTION_ESTABLISHED</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;