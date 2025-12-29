import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gray-50"
    >
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-cyber-yellow text-black text-xs font-mono font-medium tracking-wider mb-4">
                ABOUT ME
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
                Building the future, one line at a time
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm a full-stack developer with a passion for creating seamless digital experiences. 
                With expertise in modern web technologies, I transform complex problems into elegant, 
                scalable solutions.
              </p>
              
              <p>
                My journey in software development has taught me that the best solutions emerge from 
                the intersection of creativity and technical precision. I specialize in React, TypeScript, 
                Node.js, and building architectures that stand the test of time.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, and staying current with industry trends.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-white border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 font-medium">Location</p>
                <p className="text-base font-mono text-black">San Francisco, CA</p>
              </div>
              <div className="px-6 py-3 bg-white border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 font-medium">Status</p>
                <p className="text-base font-mono text-black">Available for hire</p>
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-card border-4 border border-[#8b00ff] clipped-corners">
              {/* Placeholder for profile image or visual */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/me.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cyber-yellow/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;