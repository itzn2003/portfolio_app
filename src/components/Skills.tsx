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
    { name: 'React / Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'PostgreSQL', level: 87, category: 'Database' },
    { name: 'MongoDB', level: 83, category: 'Database' },
    { name: 'Docker', level: 80, category: 'DevOps' },
    { name: 'AWS', level: 78, category: 'DevOps' },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'DevOps'];
  const tools = ['Git', 'REST APIs', 'GraphQL', 'CI/CD', 'Agile', 'TDD', 'Microservices', 'WebSocket', 'Redis'];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gray-50"
    >
      <div className={`max-w-6xl mx-auto w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 bg-cyber-yellow text-black text-xs font-mono font-medium tracking-wider mb-4">
            EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proficient in modern web technologies and industry best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, catIndex) => (
            <div
              key={category}
              className={`bg-white p-8 border border-gray-200 shadow-card transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: `${catIndex * 100}ms`,
              }}
            >
              <h3 className="text-xl font-display font-bold mb-8 text-black flex items-center">
                <span className="inline-block w-1 h-6 bg-cyber-yellow mr-3"></span>
                {category}
              </h3>
              
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono font-bold text-black">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-2 bg-gray-100 overflow-hidden relative">
                        <div
                          className={`h-full bg-black transition-all duration-1000 ease-out ${
                            isVisible ? 'w-full' : 'w-0'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
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
        
        <div className="bg-white p-8 border border-gray-200 shadow-card">
          <h3 className="text-xl font-display font-bold mb-6 text-black flex items-center">
            <span className="inline-block w-1 h-6 bg-cyber-yellow mr-3"></span>
            Tools & Methodologies
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-gray-50 border border-gray-200 text-gray-700 font-medium text-sm hover:border-black hover:bg-white transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;