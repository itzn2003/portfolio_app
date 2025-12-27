import React from 'react';

interface NavigationProps {
  currentColor: string;
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentColor, activeSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: '> HOME', color: '#0ff' },       // Cyan
    { id: 'about', label: '> ABOUT', color: '#b000ff' },  // Purple
    { id: 'projects', label: '> PROJECTS', color: '#ff0055' }, // Red
    { id: 'skills', label: '> SKILLS', color: '#0ff' },   // Cyan (cycle)
    { id: 'contact', label: '> CONTACT', color: '#b000ff' }, // Purple (cycle)
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker/90 backdrop-blur-sm"
         style={{ 
           borderColor: `${currentColor}50`,
           transition: 'border-color 0.5s ease'
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-cyber font-bold" 
                  style={{
                    color: '#0ff',
                    textShadow: '0 0 10px #0ff, 0 0 20px #0ff'
                  }}>
              CYBER.DEV
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono px-3 py-2 text-sm glitch-hover ${
                    activeSection === item.id ? 'font-bold' : ''
                  }`}
                  style={{
                    color: item.color,
                    textShadow: activeSection === item.id 
                      ? `0 0 10px ${item.color}, 0 0 20px ${item.color}` 
                      : 'none',
                    opacity: activeSection === item.id ? 1 : 0.6,
                    transition: 'text-shadow 0.3s ease, opacity 0.3s ease'
                  }}
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