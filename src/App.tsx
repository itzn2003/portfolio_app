import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [gridOpacity, setGridOpacity] = useState(0.2);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate opacity based on scroll position
      // Starts at 0.3 (30%) and gradually decreases to 0.05 (5%)
      const scrollProgress = Math.min(scrollPosition / (windowHeight * 2), 1);
      const newOpacity = 0.2 - (scrollProgress * 0.25); // Goes from 0.3 to 0.05
      
      setGridOpacity(Math.max(newOpacity, 0.05)); // Minimum 0.05
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Global grid overlay that fades on scroll */}
      <div 
        className="fixed inset-0 cyber-grid pointer-events-none z-0"
        style={{ 
          opacity: gridOpacity,
          transition: 'opacity 0.1s linear'
        }}
      />
      
      {/* Scanline overlay effect */}
      <div className="scanlines"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-cyber-darker border-t border-cyber-primary/30 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-mono text-cyber-primary/60 text-sm">
            {'>'} CYBER.DEV © 2077 | <span className="text-cyber-secondary">ALL RIGHTS RESERVED</span>
          </p>
          <p className="font-mono text-cyber-primary/40 text-xs mt-2">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;