import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
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

  const skills: Skill[] = [
    { name: 'React / Next.js', level: 95, category: 'FRONTEND' },
    { name: 'TypeScript', level: 90, category: 'FRONTEND' },
    { name: 'Tailwind CSS', level: 92, category: 'FRONTEND' },
    { name: 'Node.js', level: 88, category: 'BACKEND' },
    { name: 'Python', level: 85, category: 'BACKEND' },
    { name: 'PostgreSQL', level: 87, category: 'DATABASE' },
    { name: 'MongoDB', level: 83, category: 'DATABASE' },
    { name: 'Docker', level: 80, category: 'DEVOPS' },
    { name: 'AWS', level: 78, category: 'DEVOPS' },
  ];

  const categories = ['FRONTEND', 'BACKEND', 'DATABASE', 'DEVOPS'];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className={`max-w-6xl mx-auto relative z-10 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-cyber font-black neon-text-yellow glitch" data-text="> SKILLS">
            {'>'} SKILLS
          </h2>
          <div className="h-1 w-32 bg-cyber-yellow mt-4" style={{
            boxShadow: '0 0 10px #ff0, 0 0 20px #ff0'
          }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <div
              key={category}
              className={`bg-cyber-card/50 neon-border backdrop-blur-sm p-6 transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: `${catIndex * 100}ms`
              }}
            >
              <h3 className="text-xl font-cyber font-bold text-cyber-secondary mb-6 flex items-center">
                <span className="text-cyber-primary mr-2">{'>'}</span>
                {category}
              </h3>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="font-mono text-sm text-cyber-primary/90">
                          {skill.name}
                        </span>
                        <span className="font-mono text-sm text-cyber-secondary">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-2 bg-cyber-darker border border-cyber-primary/30 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-cyber-primary to-cyber-secondary transition-all duration-1000 ease-out ${
                            isVisible ? 'w-full' : 'w-0'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                            transitionDelay: `${(catIndex * 100) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-cyber-card/50 neon-border backdrop-blur-sm p-6">
          <h3 className="text-xl font-cyber font-bold text-cyber-primary mb-4 flex items-center">
            <span className="text-cyber-secondary mr-2">{'>'}</span>
            ADDITIONAL_PROTOCOLS
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {['Git', 'REST APIs', 'GraphQL', 'CI/CD', 'Agile', 'TDD', 'Microservices', 'WebSocket', 'Redis'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 font-mono text-sm bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary hover:border-cyber-secondary hover:text-cyber-secondary transition-all duration-300 cursor-pointer glitch-hover"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;