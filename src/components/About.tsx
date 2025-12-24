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
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      {/* Removed local grid - using global grid instead */}
      
      <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-cyber font-black glitch text-cyber-purple" 
              data-text="> ABOUT_ME"
              style={{
                textShadow: '0 0 10px #b000ff, 0 0 20px #b000ff, 0 0 40px #b000ff'
              }}>
            {'>'} ABOUT_ME
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-red mt-4" style={{
            boxShadow: '0 0 10px #b000ff, 0 0 20px #ff10f0'
          }}></div>
        </div>
        
        <div className="bg-cyber-card/50 backdrop-blur-sm p-8 border-2 border-cyber-purple/50 hover:border-cyber-pink/70 transition-all duration-300"
             style={{
               boxShadow: 'inset 0 0 20px rgba(176, 0, 255, 0.2), 0 0 20px rgba(176, 0, 255, 0.2)'
             }}>
          <p className="text-lg font-mono text-cyber-green/90 leading-relaxed mb-6">
            {'>'} SYSTEM_STATUS: <span className="text-cyber-yellow animate-pulse">ONLINE</span>
          </p>
          
          <p className="text-lg font-mono text-cyber-primary/90 leading-relaxed mb-6">
            I'm a full-stack developer navigating the digital wasteland, building resilient systems 
            that thrive in the chaos. With expertise in modern web technologies and a passion for 
            creating seamless user experiences, I transform complex problems into elegant solutions.
          </p>
          
          <p className="text-lg font-mono text-cyber-primary/90 leading-relaxed mb-6">
            My journey through the neon-lit streets of code has taught me that the best solutions 
            emerge from the intersection of creativity and technical precision. I specialize in 
            React, TypeScript, Node.js, and building scalable architectures that can withstand 
            the test of time.
          </p>
          
          <p className="text-lg font-mono text-cyber-primary/90 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or diving deep into cyberpunk literature and aesthetics.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-cyber-green/10 border border-cyber-green/50 font-mono text-sm text-cyber-green glitch-hover"
                 style={{
                   boxShadow: '0 0 10px rgba(0, 255, 65, 0.2)'
                 }}>
              {'>'} LOCATION: <span className="text-cyber-yellow">SECTOR_7</span>
            </div>
            <div className="px-4 py-2 bg-cyber-red/10 border border-cyber-red/50 font-mono text-sm text-cyber-red glitch-hover"
                 style={{
                   boxShadow: '0 0 10px rgba(255, 0, 85, 0.2)'
                 }}>
              {'>'} STATUS: <span className="text-cyber-yellow animate-pulse">AVAILABLE_FOR_HIRE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;