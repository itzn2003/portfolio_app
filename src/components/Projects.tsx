import React, { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: string;
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
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-cyber font-black neon-text glitch" data-text="> PROJECTS">
            {'>'} PROJECTS
          </h2>
          <div className="h-1 w-32 bg-cyber-primary mt-4" style={{
            boxShadow: '0 0 10px #0ff, 0 0 20px #0ff'
          }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-cyber-card/50 neon-border backdrop-blur-sm p-6 transition-all duration-500 glitch-hover hover:scale-105 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-cyber font-bold text-cyber-primary glitch" data-text={project.title}>
                  {project.title}
                </h3>
                <span className={`px-2 py-1 text-xs font-mono border ${
                  project.status === 'ACTIVE' 
                    ? 'border-cyber-secondary text-cyber-secondary' 
                    : project.status === 'BETA'
                    ? 'border-cyber-yellow text-cyber-yellow'
                    : 'border-cyber-primary text-cyber-primary'
                } animate-pulse`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-sm font-mono text-cyber-primary/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-mono bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="w-full py-2 font-mono text-sm border border-cyber-secondary text-cyber-secondary hover:bg-cyber-secondary/10 transition-all duration-300"
                style={{
                  boxShadow: 'inset 0 0 5px rgba(255, 0, 255, 0.3), 0 0 5px rgba(255, 0, 255, 0.3)'
                }}
              >
                {'>'} VIEW_PROJECT
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 font-mono text-lg neon-border bg-transparent text-cyber-primary hover:bg-cyber-primary/10 transition-all duration-300 glitch-hover">
            {'>'} LOAD_MORE_PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;