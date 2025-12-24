import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsProps {
  sectionColor: string;
}

const Skills: React.FC<SkillsProps> = ({ sectionColor }) => {
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
      <div className={`max-w-6xl mx-auto relative z-10 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-cyber font-black glitch" 
              data-text="> SKILLS"
              style={{
                color: sectionColor,
                textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}, 0 0 40px ${sectionColor}`
              }}>
            {'>'} SKILLS
          </h2>
          <div className="h-1 w-32 mt-4" style={{
            backgroundColor: sectionColor,
            boxShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
          }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <div
              key={category}
              className={`bg-cyber-card/50 backdrop-blur-sm p-8 transition-all duration-500 border-2 glitch-hover ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: `${catIndex * 100}ms`,
                borderColor: `${sectionColor}80`,
                boxShadow: `inset 0 0 20px ${sectionColor}20, 0 0 20px ${sectionColor}30`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = sectionColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${sectionColor}80`;
              }}
            >
              <h3 className="text-xl font-cyber font-bold mb-8 flex items-center"
                  style={{ 
                    color: sectionColor,
                    textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
                  }}>
                <span style={{ color: sectionColor }} className="mr-2">{'>'}</span>
                {category}
              </h3>
              
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between mb-3">
                        <span className="font-mono text-sm"
                              style={{ color: `${sectionColor}cc` }}>
                          {skill.name}
                        </span>
                        <span className="font-mono text-sm font-bold"
                              style={{ color: sectionColor }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-3 bg-cyber-darker border overflow-hidden relative"
                           style={{ borderColor: `${sectionColor}50` }}>
                        <div
                          className={`h-full transition-all duration-1000 ease-out ${
                            isVisible ? 'w-full' : 'w-0'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            backgroundColor: sectionColor,
                            boxShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`,
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
        
        <div className="mt-12 bg-cyber-card/50 backdrop-blur-sm p-8 border-2 glitch-hover"
             style={{
               borderColor: `${sectionColor}80`,
               boxShadow: `inset 0 0 20px ${sectionColor}20, 0 0 20px ${sectionColor}30`
             }}>
          <h3 className="text-xl font-cyber font-bold mb-6 flex items-center"
              style={{
                color: sectionColor,
                textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
              }}>
            <span style={{ color: sectionColor }} className="mr-2">{'>'}</span>
            ADDITIONAL_PROTOCOLS
          </h3>
          
          <div className="flex flex-wrap gap-4">
            {['Git', 'REST APIs', 'GraphQL', 'CI/CD', 'Agile', 'TDD', 'Microservices', 'WebSocket', 'Redis'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 font-mono text-sm border transition-all duration-300 cursor-pointer glitch-hover"
                style={{
                  backgroundColor: `${sectionColor}15`,
                  borderColor: `${sectionColor}80`,
                  color: sectionColor
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = sectionColor;
                  e.currentTarget.style.backgroundColor = `${sectionColor}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${sectionColor}80`;
                  e.currentTarget.style.backgroundColor = `${sectionColor}15`;
                }}
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