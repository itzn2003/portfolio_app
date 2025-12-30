import React, { useEffect, useState } from 'react';
import { heroContent } from '../content';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden dot-grid-overlay"
    >
    
      <div className={`relative z-10 text-center p-4 max-w-5xl mx-auto transition-all duration-1000 bg-cyber-yellow clipped-corners ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className={"mb-6"}>
          <span className="inline-block px-4 py-2 bg-cyber-purple text-white text-sm font-medium font-mono tracking-wider">
            {heroContent.badge}
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-black">
          {heroContent.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          {heroContent.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn"
          >
            <span className="btn__glitch">{heroContent.primaryCTA}</span>
            {heroContent.primaryCTA}
          </button>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-secondary"
          >
            <span className="btn__glitch">{heroContent.secondaryCTA}</span>
            {heroContent.secondaryCTA}
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;