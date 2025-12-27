import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Define color for each section - cycling between cyan, purple, red
  const sectionColors: Record<string, string> = {
    hero: '#0ff',      // Cyan
    about: '#b000ff',  // Purple
    projects: '#ff0055', // Red
    skills: '#0ff',    // Cyan (cycle repeats)
    contact: '#b000ff' // Purple (cycle repeats)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Detect active section
      if (scrollPosition < windowHeight * 0.7) {
        setActiveSection('hero');
        return;
      }

      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const detectionPoint = scrollPosition + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (detectionPoint >= offsetTop && detectionPoint < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentColor = sectionColors[activeSection];

  return (
    <div className="App">
      {/* Navigation with dynamic color */}
      <Navigation currentColor={currentColor} activeSection={activeSection} />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero sectionColor={sectionColors.hero} />
        <About sectionColor={sectionColors.about} />
        <Projects sectionColor={sectionColors.projects} />
        <Skills sectionColor={sectionColors.skills} />
        <Contact sectionColor={sectionColors.contact} />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-cyber-darker border-t py-6"
              style={{ 
                borderColor: `${currentColor}50`,
                transition: 'border-color 0.5s ease'
              }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-mono text-sm"
             style={{ 
               color: `${currentColor}99`,
               transition: 'color 0.5s ease'
             }}>
            {'>'} CYBER.DEV © 2077 | <span style={{ 
              color: currentColor,
              transition: 'color 0.5s ease'
            }}>ALL RIGHTS RESERVED</span>
          </p>
          <p className="font-mono text-xs mt-2"
             style={{ 
               color: `${currentColor}66`,
               transition: 'color 0.5s ease'
             }}>
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Custom scrollbar styles */}
      <style>{`
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0f;
        }
        ::-webkit-scrollbar-thumb {
          background: ${currentColor};
          box-shadow: 0 0 10px ${currentColor};
          transition: background 0.5s ease, box-shadow 0.5s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${currentColor};
          box-shadow: 0 0 20px ${currentColor};
        }
      `}</style>
    </div>
  );
}

export default App;