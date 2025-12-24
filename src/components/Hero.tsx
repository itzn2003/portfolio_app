import React, { useEffect, useState } from 'react';

interface HeroProps {
  sectionColor: string;
}

const Hero: React.FC<HeroProps> = ({ sectionColor }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-card opacity-50"></div>
      
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-4">
          <span className="font-mono text-lg animate-flicker"
                style={{
                  color: sectionColor,
                  textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
                }}>
            {'>'} INITIALIZING...
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-cyber font-black mb-6 glitch"
            data-text="ZAYN A. HASHIM"
            style={{
              color: sectionColor,
              textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}, 0 0 40px ${sectionColor}, 0 0 80px ${sectionColor}`
            }}>
          ZAYN A. HASHIM
        </h1>
        
        <div className="text-2xl md:text-4xl font-mono mb-8">
          <span className="glitch font-bold" 
                data-text="FULL STACK DEVELOPER"
                style={{
                  color: sectionColor,
                  textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}, 0 0 40px ${sectionColor}`
                }}>
            FULL STACK DEVELOPER
          </span>
        </div>
        
        <p className="text-lg md:text-xl font-mono max-w-2xl mx-auto mb-12"
           style={{ color: `${sectionColor}cc` }}>
          {'>'} Building the future in the digital dystopia <span className="animate-pulse" style={{ color: sectionColor }}>_</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 font-mono text-lg border-2 bg-transparent transition-all duration-300 glitch-hover"
            style={{
              borderColor: sectionColor,
              color: sectionColor,
              boxShadow: `inset 0 0 10px ${sectionColor}66, 0 0 10px ${sectionColor}66`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${sectionColor}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {'>'} VIEW PROJECTS
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 font-mono text-lg border-2 bg-transparent transition-all duration-300 glitch-hover"
            style={{
              borderColor: sectionColor,
              color: sectionColor,
              boxShadow: `inset 0 0 10px ${sectionColor}66, 0 0 10px ${sectionColor}66`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${sectionColor}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {'>'} CONTACT ME
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-3xl" style={{
          color: sectionColor,
          textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
        }}>↓</div>
      </div>
    </section>
  );
};

export default Hero;