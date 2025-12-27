import React, { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: string;
}

interface ProjectsProps {
  sectionColor: string;
}

const Projects: React.FC<ProjectsProps> = ({ sectionColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Helper to get color class for hover effects
  const getColorClass = (color: string) => {
    if (color === '#0ff') return 'color-cyan';
    if (color === '#b000ff') return 'color-purple';
    if (color === '#ff0055') return 'color-red';
    return 'color-cyan';
  };

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
      status: 'ACTIVE'
    },
    {
      id: 2,
      title: 'DYSTOPIAN_MARKETPLACE',
      description: 'Decentralized marketplace platform leveraging blockchain technology. Secure transactions in the digital wasteland.',
      tech: ['Next.js', 'Solidity', 'Web3', 'PostgreSQL'],
      status: 'BETA'
    },
    {
      id: 3,
      title: 'CYBER_CHAT_PROTOCOL',
      description: 'End-to-end encrypted messaging system with quantum-resistant cryptography. Privacy-first communication for the modern age.',
      tech: ['Node.js', 'Socket.io', 'MongoDB', 'Encryption'],
      status: 'DEVELOPMENT'
    }
  ];

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
          <h2 className="text-4xl md:text-6xl font-cyber font-black glitch" 
              data-text="> PROJECTS"
              style={{
                color: sectionColor,
                textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}, 0 0 40px ${sectionColor}`
              }}>
            {'>'} PROJECTS
          </h2>
          <div className="h-1 w-32 mt-4" style={{
            backgroundColor: sectionColor,
            boxShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
          }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-cyber-card/50 backdrop-blur-sm p-8 transition-all duration-200 glitch-hover ${getColorClass(sectionColor)} border-2 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                borderColor: `${sectionColor}80`,
                boxShadow: `0 0 10px ${sectionColor}50, 0 0 20px ${sectionColor}30`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = sectionColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${sectionColor}80`;
              }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-cyber font-bold glitch overflow-hidden" 
                    data-text={project.title}
                    style={{ color: sectionColor }}>
                  {project.title}
                </h3>
                {/* <span className="px-3 py-1 text-xs font-mono border animate-pulse"
                      style={{
                        borderColor: sectionColor,
                        color: sectionColor
                      }}>
                  {project.status}
                </span> */}
              </div>
              
              <p className="text-sm font-mono mb-6 leading-relaxed"
                 style={{ color: `${sectionColor}cc` }}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-mono border glitch-hover"
                    style={{
                      backgroundColor: `${sectionColor}15`,
                      borderColor: `${sectionColor}50`,
                      color: sectionColor
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="w-full py-3 font-mono text-sm border-2 transition-all duration-300 glitch-hover"
                style={{
                  borderColor: sectionColor,
                  color: sectionColor,
                  boxShadow: `inset 0 0 10px ${sectionColor}50, 0 0 10px ${sectionColor}50`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${sectionColor}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {'>'} VIEW_PROJECT
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 font-mono text-lg border-2 bg-transparent transition-all duration-300 glitch-hover"
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
                  }}>
            {'>'} LOAD_MORE_PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;