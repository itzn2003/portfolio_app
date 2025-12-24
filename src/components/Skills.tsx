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

  const categories = [
    { name: 'FRONTEND', color: 'cyber-green', textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41' },
    { name: 'BACKEND', color: 'cyber-red', textShadow: '0 0 10px #ff0055, 0 0 20px #ff0055' },
    { name: 'DATABASE', color: 'cyber-purple', textShadow: '0 0 10px #b000ff, 0 0 20px #b000ff' },
    { name: 'DEVOPS', color: 'cyber-yellow', textShadow: '0 0 10px #ffff00, 0 0 20px #ffff00' }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      {/* Removed local grid - using global grid instead */}
      
      <div className={`max-w-6xl mx-auto relative z-10 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-cyber font-black glitch text-cyber-yellow" 
              data-text="> SKILLS"
              style={{
                textShadow: '0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 40px #ffff00'
              }}>
            {'>'} SKILLS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber-yellow via-cyber-orange to-cyber-red mt-4" style={{
            boxShadow: '0 0 10px #ffff00, 0 0 20px #ff6600'
          }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <div
              key={category.name}
              className={`bg-cyber-card/50 backdrop-blur-sm p-8 transition-all duration-500 border-2 border-${category.color}/50 hover:border-${category.color} glitch-hover ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: `${catIndex * 100}ms`,
                boxShadow: `inset 0 0 20px rgba(var(--${category.color}), 0.1), ${category.textShadow.split(',')[0]}`
              }}
            >
              <h3 className={`text-xl font-cyber font-bold text-${category.color} mb-8 flex items-center`}
                  style={{ textShadow: category.textShadow }}>
                <span className="text-cyber-primary mr-2">{'>'}</span>
                {category.name}
              </h3>
              
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category.name)
                  .map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between mb-3">
                        <span className="font-mono text-sm text-cyber-primary/90">
                          {skill.name}
                        </span>
                        <span className={`font-mono text-sm text-${category.color} font-bold`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-3 bg-cyber-darker border border-cyber-primary/30 overflow-hidden relative">
                        <div
                          className={`h-full bg-gradient-to-r from-${category.color} to-cyber-primary transition-all duration-1000 ease-out ${
                            isVisible ? 'w-full' : 'w-0'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            boxShadow: category.textShadow,
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
        
        <div className="mt-12 bg-cyber-card/50 backdrop-blur-sm p-8 border-2 border-cyber-pink/50 hover:border-cyber-pink glitch-hover"
             style={{
               boxShadow: 'inset 0 0 20px rgba(255, 16, 240, 0.1), 0 0 20px rgba(255, 16, 240, 0.2)'
             }}>
          <h3 className="text-xl font-cyber font-bold text-cyber-pink mb-6 flex items-center"
              style={{
                textShadow: '0 0 10px #ff10f0, 0 0 20px #ff10f0'
              }}>
            <span className="text-cyber-primary mr-2">{'>'}</span>
            ADDITIONAL_PROTOCOLS
          </h3>
          
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'Git', color: 'cyber-red' },
              { name: 'REST APIs', color: 'cyber-green' },
              { name: 'GraphQL', color: 'cyber-purple' },
              { name: 'CI/CD', color: 'cyber-yellow' },
              { name: 'Agile', color: 'cyber-primary' },
              { name: 'TDD', color: 'cyber-pink' },
              { name: 'Microservices', color: 'cyber-orange' },
              { name: 'WebSocket', color: 'cyber-green' },
              { name: 'Redis', color: 'cyber-red' }
            ].map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 font-mono text-sm bg-${tech.color}/10 border border-${tech.color}/50 text-${tech.color} hover:border-${tech.color} hover:bg-${tech.color}/20 transition-all duration-300 cursor-pointer glitch-hover`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;