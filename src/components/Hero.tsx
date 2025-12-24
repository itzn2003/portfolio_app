import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-card opacity-50"></div>
      
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-4">
          <span className="text-cyber-secondary font-mono text-lg animate-flicker">
            {'>'} INITIALIZING...
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-cyber font-black mb-6 glitch neon-text" data-text="JOHN DOE">
          JOHN DOE
        </h1>
        
        <div className="text-2xl md:text-4xl font-mono mb-8 text-cyber-secondary neon-text-magenta">
          <span className="glitch" data-text="FULL STACK DEVELOPER">
            FULL STACK DEVELOPER
          </span>
        </div>
        
        <p className="text-lg md:text-xl font-mono text-cyber-primary/80 max-w-2xl mx-auto mb-12">
          {'>'} Building the future in the digital dystopia <span className="animate-pulse">_</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 font-mono text-lg neon-border bg-transparent text-cyber-primary hover:bg-cyber-primary/10 transition-all duration-300 glitch-hover"
          >
            {'>'} VIEW PROJECTS
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 font-mono text-lg border-2 border-cyber-secondary bg-transparent text-cyber-secondary hover:bg-cyber-secondary/10 transition-all duration-300 glitch-hover"
            style={{
              boxShadow: 'inset 0 0 10px rgba(255, 0, 255, 0.4), 0 0 10px rgba(255, 0, 255, 0.4)'
            }}
          >
            {'>'} CONTACT ME
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-cyber-primary text-3xl">↓</div>
      </div>
    </section>
  );
};

export default Hero;