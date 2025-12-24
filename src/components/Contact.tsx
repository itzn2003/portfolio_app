import React, { useEffect, useRef, useState } from 'react';

interface ContactProps {
  sectionColor: string;
}

const Contact: React.FC<ContactProps> = ({ sectionColor }) => {
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
          <h2 className="text-4xl md:text-6xl font-cyber font-black glitch" 
              data-text="> CONTACT"
              style={{
                color: sectionColor,
                textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}, 0 0 40px ${sectionColor}`
              }}>
            {'>'} CONTACT
          </h2>
          <div className="h-1 w-32 mt-4" style={{
            backgroundColor: sectionColor,
            boxShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
          }}></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-cyber-card/50 backdrop-blur-sm p-8 border-2 glitch-hover"
                 style={{
                   borderColor: `${sectionColor}80`,
                   boxShadow: `inset 0 0 20px ${sectionColor}20, 0 0 20px ${sectionColor}30`
                 }}>
              <h3 className="text-xl font-cyber font-bold mb-8 flex items-center"
                  style={{
                    color: sectionColor,
                    textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
                  }}>
                <span style={{ color: sectionColor }} className="mr-2">{'>'}</span>
                TRANSMISSION_CHANNELS
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="font-mono text-lg mr-3" style={{ color: sectionColor }}>{'>'}</span>
                  <div>
                    <p className="font-mono text-sm mb-1" style={{ color: `${sectionColor}99` }}>EMAIL</p>
                    <p className="font-mono" style={{ color: sectionColor }}>zayn.hashim@cybernet.void</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="font-mono text-lg mr-3" style={{ color: sectionColor }}>{'>'}</span>
                  <div>
                    <p className="font-mono text-sm mb-1" style={{ color: `${sectionColor}99` }}>LOCATION</p>
                    <p className="font-mono" style={{ color: sectionColor }}>Neo Tokyo, Sector 7</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="font-mono text-lg mr-3" style={{ color: sectionColor }}>{'>'}</span>
                  <div>
                    <p className="font-mono text-sm mb-1" style={{ color: `${sectionColor}99` }}>STATUS</p>
                    <p className="font-mono animate-pulse" style={{ color: sectionColor }}>ONLINE 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cyber-card/50 backdrop-blur-sm p-8 border-2 glitch-hover"
                 style={{
                   borderColor: `${sectionColor}80`,
                   boxShadow: `inset 0 0 20px ${sectionColor}20, 0 0 20px ${sectionColor}30`
                 }}>
              <h3 className="text-xl font-cyber font-bold mb-8 flex items-center"
                  style={{
                    color: sectionColor,
                    textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
                  }}>
                <span style={{ color: sectionColor }} className="mr-2">{'>'}</span>
                SOCIAL_LINKS
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: 'GitHub', handle: '@zaynahashim' },
                  { name: 'LinkedIn', handle: '/in/zaynahashim' },
                  { name: 'Twitter', handle: '@zayn_hashim' },
                  { name: 'Discord', handle: 'ZaynHashim#0001' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 font-mono text-sm border transition-all duration-300 glitch-hover"
                    style={{
                      backgroundColor: `${sectionColor}10`,
                      borderColor: `${sectionColor}50`,
                      color: sectionColor
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = sectionColor;
                      e.currentTarget.style.backgroundColor = `${sectionColor}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${sectionColor}50`;
                      e.currentTarget.style.backgroundColor = `${sectionColor}10`;
                    }}
                  >
                    {'>'} {social.name}: <span style={{ color: sectionColor }}>{social.handle}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-cyber-card/50 backdrop-blur-sm p-8 border-2 glitch-hover"
               style={{
                 borderColor: `${sectionColor}80`,
                 boxShadow: `inset 0 0 20px ${sectionColor}20, 0 0 20px ${sectionColor}30`
               }}>
            <h3 className="text-xl font-cyber font-bold mb-8 flex items-center"
                style={{
                  color: sectionColor,
                  textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
                }}>
              <span style={{ color: sectionColor }} className="mr-2">{'>'}</span>
              SEND_MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-sm mb-2"
                       style={{ color: `${sectionColor}cc` }}>
                  {'>'} NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-darker border font-mono focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: `${sectionColor}50`,
                    color: sectionColor
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = sectionColor;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = `${sectionColor}50`;
                  }}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm mb-2"
                       style={{ color: `${sectionColor}cc` }}>
                  {'>'} EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-darker border font-mono focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: `${sectionColor}50`,
                    color: sectionColor
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = sectionColor;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = `${sectionColor}50`;
                  }}
                  placeholder="your.email@domain.com"
                  required
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm mb-2"
                       style={{ color: `${sectionColor}cc` }}>
                  {'>'} MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-cyber-darker border font-mono focus:outline-none transition-all duration-300 resize-none"
                  style={{
                    borderColor: `${sectionColor}50`,
                    color: sectionColor
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = sectionColor;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = `${sectionColor}50`;
                  }}
                  placeholder="Type your message here..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 font-mono text-lg border-2 transition-all duration-300 glitch-hover"
                style={{
                  borderColor: sectionColor,
                  color: sectionColor,
                  boxShadow: `inset 0 0 20px ${sectionColor}50, 0 0 20px ${sectionColor}50`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${sectionColor}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {'>'} TRANSMIT_MESSAGE
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-mono" style={{ color: `${sectionColor}99` }}>
            {'>'} SYSTEM_MESSAGE: <span className="animate-pulse" style={{
              color: sectionColor,
              textShadow: `0 0 10px ${sectionColor}`
            }}>CONNECTION_ESTABLISHED</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;