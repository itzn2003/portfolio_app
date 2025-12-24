import React, { useEffect, useRef, useState } from 'react';

interface AboutProps {
  sectionColor: string;
}

const About: React.FC<AboutProps> = ({ sectionColor }) => {
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
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-cyber font-black glitch" 
              data-text="> ABOUT_ME"
              style={{
                color: sectionColor,
                textShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}, 0 0 40px ${sectionColor}`
              }}>
            {'>'} ABOUT_ME
          </h2>
          <div className="h-1 w-32 mt-4" style={{
            backgroundColor: sectionColor,
            boxShadow: `0 0 10px ${sectionColor}, 0 0 20px ${sectionColor}`
          }}></div>
        </div>
        
        <div className="bg-cyber-card/50 backdrop-blur-sm p-8 border-2 transition-all duration-300"
             style={{
               borderColor: `${sectionColor}80`,
               boxShadow: `inset 0 0 20px ${sectionColor}33, 0 0 20px ${sectionColor}33`
             }}
             onMouseEnter={(e) => {
               e.currentTarget.style.borderColor = sectionColor;
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.borderColor = `${sectionColor}80`;
             }}>
          <p className="text-lg font-mono leading-relaxed mb-6"
             style={{ color: `${sectionColor}ee` }}>
            {'>'} SYSTEM_STATUS: <span className="animate-pulse" style={{ color: sectionColor }}>ONLINE</span>
          </p>
          
          <p className="text-lg font-mono leading-relaxed mb-6"
             style={{ color: `${sectionColor}cc` }}>
            I'm a full-stack developer navigating the digital wasteland, building resilient systems 
            that thrive in the chaos. With expertise in modern web technologies and a passion for 
            creating seamless user experiences, I transform complex problems into elegant solutions.
          </p>
          
          <p className="text-lg font-mono leading-relaxed mb-6"
             style={{ color: `${sectionColor}cc` }}>
            My journey through the neon-lit streets of code has taught me that the best solutions 
            emerge from the intersection of creativity and technical precision. I specialize in 
            React, TypeScript, Node.js, and building scalable architectures that can withstand 
            the test of time.
          </p>
          
          <p className="text-lg font-mono leading-relaxed"
             style={{ color: `${sectionColor}cc` }}>
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or diving deep into cyberpunk literature and aesthetics.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="px-4 py-2 border font-mono text-sm glitch-hover"
                 style={{
                   backgroundColor: `${sectionColor}20`,
                   borderColor: `${sectionColor}80`,
                   color: sectionColor,
                   boxShadow: `0 0 10px ${sectionColor}33`
                 }}>
              {'>'} LOCATION: <span style={{ color: sectionColor }}>SECTOR_7</span>
            </div>
            <div className="px-4 py-2 border font-mono text-sm glitch-hover"
                 style={{
                   backgroundColor: `${sectionColor}20`,
                   borderColor: `${sectionColor}80`,
                   color: sectionColor,
                   boxShadow: `0 0 10px ${sectionColor}33`
                 }}>
              {'>'} STATUS: <span className="animate-pulse" style={{ color: sectionColor }}>AVAILABLE_FOR_HIRE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;