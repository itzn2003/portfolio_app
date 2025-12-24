import React, { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: string;
  color: string;
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const projects: Project[] = [
    {
      id: 1,
      title: 'NEURAL_NETWORK_UI',
      description: 'A cutting-edge neural network visualization tool built with React and D3.js. Features real-time data processing and interactive node manipulation.',
      tech: ['React', 'TypeScript', 'D3.js', 'WebGL'],
      status: 'ACTIVE',
      color: 'green'
    },
    {
      id: 2,
      title: 'DYSTOPIAN_MARKETPLACE',
      description: 'Decentralized marketplace platform leveraging blockchain technology. Secure transactions in the digital wasteland.',
      tech: ['Next.js', 'Solidity', 'Web3', 'PostgreSQL'],
      status: 'BETA',
      color: 'yellow'
    },
    {
      id: 3,
      title: 'CYBER_CHAT_PROTOCOL',
      description: 'End-to-end encrypted messaging system with quantum-resistant cryptography. Privacy-first communication for the modern age.',
      tech: ['Node.js', 'Socket.io', 'MongoDB', 'Encryption'],
      status: 'DEVELOPMENT',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; shadow: string }> = {
      green: {
        border: 'border-cyber-green',
        text: 'text-cyber-green',
        shadow: '0 0 10px rgba(0, 255, 65, 0.3), 0 0 20px rgba(0, 255, 65, 0.2)'
      },
      yellow: {
        border: 'border-cyber-yellow',
        text: 'text-cyber-yellow',
        shadow: '0 0 10px rgba(255, 255, 0, 0.3), 0 0 20px rgba(255, 255, 0, 0.2)'
      },
      red: {
        border: 'border-cyber-red',
        text: 'text-cyber-red',
        shadow: '0 0 10px rgba(255, 0, 85, 0.3), 0 0 20px rgba(255, 0, 85, 0.2)'
      }
    };
    return colors[color] || colors.green;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-card via-cyber-dark to-cyber-darker opacity-50"></div>
      
      <div className={`max-w-7xl mx-auto relative z-10 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-cyber font-black glitch text-cyber-green" 
              data-text="> PROJECTS"
              style={{
                textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41'
              }}>
            {'>'} PROJECTS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber-green via-cyber-primary to-cyber-yellow mt-4" style={{
            boxShadow: '0 0 10px #00ff41, 0 0 20px #0ff'
          }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <div
                key={project.id}
                className={`bg-cyber-card/50 backdrop-blur-sm p-8 transition-all duration-500 glitch-hover glitch-card hover:scale-105 border-2 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                } ${colorClasses.border}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  boxShadow: colorClasses.shadow
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-xl font-cyber font-bold ${colorClasses.text} glitch`} data-text={project.title}>
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 text-xs font-mono border ${colorClasses.border} ${colorClasses.text} animate-pulse`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-sm font-mono text-cyber-primary/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-mono bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple glitch-hover"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className={`w-full py-3 font-mono text-sm border-2 ${colorClasses.border} ${colorClasses.text} hover:bg-${project.color}/10 transition-all duration-300 glitch-hover`}
                  style={{
                    boxShadow: `inset ${colorClasses.shadow}, ${colorClasses.shadow}`
                  }}
                >
                  {'>'} VIEW_PROJECT
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 font-mono text-lg border-2 border-cyber-yellow bg-transparent text-cyber-yellow hover:bg-cyber-yellow/10 transition-all duration-300 glitch-hover"
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(255, 255, 0, 0.3), 0 0 20px rgba(255, 255, 0, 0.3)'
                  }}>
            {'>'} LOAD_MORE_PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;