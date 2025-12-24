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
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-cyber font-black neon-text-magenta glitch" data-text="> CONTACT">
            {'>'} CONTACT
          </h2>
          <div className="h-1 w-32 bg-cyber-secondary mt-4" style={{
            boxShadow: '0 0 10px #f0f, 0 0 20px #f0f'
          }}></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-cyber-card/50 neon-border backdrop-blur-sm p-6">
              <h3 className="text-xl font-cyber font-bold text-cyber-primary mb-6 flex items-center">
                <span className="text-cyber-secondary mr-2">{'>'}</span>
                TRANSMISSION_CHANNELS
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-cyber-secondary mr-3 font-mono">{'>'}</span>
                  <div>
                    <p className="font-mono text-sm text-cyber-primary/60">EMAIL</p>
                    <p className="font-mono text-cyber-primary">john.doe@cybernet.void</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-cyber-secondary mr-3 font-mono">{'>'}</span>
                  <div>
                    <p className="font-mono text-sm text-cyber-primary/60">LOCATION</p>
                    <p className="font-mono text-cyber-primary">Neo Tokyo, Sector 7</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-cyber-secondary mr-3 font-mono">{'>'}</span>
                  <div>
                    <p className="font-mono text-sm text-cyber-primary/60">STATUS</p>
                    <p className="font-mono text-cyber-secondary animate-pulse">ONLINE 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cyber-card/50 neon-border backdrop-blur-sm p-6">
              <h3 className="text-xl font-cyber font-bold text-cyber-primary mb-6 flex items-center">
                <span className="text-cyber-secondary mr-2">{'>'}</span>
                SOCIAL_LINKS
              </h3>
              
              <div className="space-y-3">
                {[
                  { name: 'GitHub', handle: '@johndoe' },
                  { name: 'LinkedIn', handle: '/in/johndoe' },
                  { name: 'Twitter', handle: '@johndoe_dev' },
                  { name: 'Discord', handle: 'JohnDoe#0001' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 font-mono text-sm bg-cyber-primary/5 border border-cyber-primary/30 text-cyber-primary hover:border-cyber-secondary hover:text-cyber-secondary hover:bg-cyber-secondary/5 transition-all duration-300 glitch-hover"
                  >
                    {'>'} {social.name}: <span className="text-cyber-secondary">{social.handle}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-cyber-card/50 neon-border backdrop-blur-sm p-6">
            <h3 className="text-xl font-cyber font-bold text-cyber-primary mb-6 flex items-center">
              <span className="text-cyber-secondary mr-2">{'>'}</span>
              SEND_MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-sm text-cyber-primary/80 mb-2">
                  {'>'} NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-darker border border-cyber-primary/30 text-cyber-primary font-mono focus:border-cyber-secondary focus:outline-none transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm text-cyber-primary/80 mb-2">
                  {'>'} EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-darker border border-cyber-primary/30 text-cyber-primary font-mono focus:border-cyber-secondary focus:outline-none transition-all duration-300"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm text-cyber-primary/80 mb-2">
                  {'>'} MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-cyber-darker border border-cyber-primary/30 text-cyber-primary font-mono focus:border-cyber-secondary focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Type your message here..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 font-mono text-lg border-2 border-cyber-secondary text-cyber-secondary hover:bg-cyber-secondary/10 transition-all duration-300 glitch-hover"
                style={{
                  boxShadow: 'inset 0 0 10px rgba(255, 0, 255, 0.4), 0 0 10px rgba(255, 0, 255, 0.4)'
                }}
              >
                {'>'} TRANSMIT_MESSAGE
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-mono text-cyber-primary/60">
            {'>'} SYSTEM_MESSAGE: <span className="text-cyber-secondary animate-pulse">CONNECTION_ESTABLISHED</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;