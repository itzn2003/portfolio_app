import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { footerContent } from './content';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

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

  return (
    <div className="App bg-white">
      {/* Navigation */}
      <Navigation activeSection={activeSection} />
      
      {/* Main content */}
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            {footerContent.copyright}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            {footerContent.builtWith}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;