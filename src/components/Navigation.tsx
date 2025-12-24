import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: '> HOME', color: 'cyber-primary' },
    { id: 'about', label: '> ABOUT', color: 'cyber-purple' },
    { id: 'projects', label: '> PROJECTS', color: 'cyber-green' },
    { id: 'skills', label: '> SKILLS', color: 'cyber-yellow' },
    { id: 'contact', label: '> CONTACT', color: 'cyber-red' },
  ];

  const getActiveColor = (itemId: string) => {
    const item = navItems.find(i => i.id === itemId);
    return item?.color || 'cyber-primary';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker/90 backdrop-blur-sm border-b border-cyber-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-cyber font-bold neon-text glitch" data-text="CYBER.DEV">
              CYBER.DEV
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono px-3 py-2 text-sm transition-all duration-300 glitch-hover ${
                    activeSection === item.id
                      ? `text-${item.color} font-bold`
                      : `text-${item.color}/60 hover:text-${item.color}`
                  }`}
                  style={activeSection === item.id ? {
                    textShadow: `0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color)`,
                    '--tw-shadow-color': `rgb(var(--${item.color}))`,
                  } as React.CSSProperties : {}}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;