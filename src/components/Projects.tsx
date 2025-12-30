import React, { useEffect, useRef, useState } from 'react';
import { projects, projectsContent } from '../content';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
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

  const nextImage = (projectId: number, imageCount: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imageCount
    }));
  };

  const prevImage = (projectId: number, imageCount: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imageCount) % imageCount
    }));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-white"
    >
      <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 bg-cyber-yellow text-black text-xs font-mono font-medium tracking-wider mb-4">
            {projectsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-4">
            {projectsContent.heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {projectsContent.subheading}
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white border border-gray-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Content Section - 2/3 width */}
                <div className="md:w-2/3 p-8 lg:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-black">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 font-mono text-sm hover:border-gray-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {project.githubLink && (
                      <button 
                        className="btn"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <span className="btn__glitch">{project.githubButtonText || 'View Project'}</span>
                        {project.githubButtonText || 'View Project'}
                      </button>
                    )}
                    {project.liveLink && (
                      <button 
                        className="btn btn-secondary"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <span className="btn__glitch">{project.liveButtonText || 'Live Demo'}</span>
                        {project.liveButtonText || 'Live Demo'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Image Section - 1/2 width */}
                <div className="md:w-1/2 relative border-t md:border-t-0 md:border-l border-gray-200">
                  <div className="relative h-64 md:h-full min-h-[400px] overflow-hidden bg-gray-50 border-4 border-dashed border-[#8b00ff]">
                    {/* Image Display */}
                    <img
                      src={project.images[currentImageIndex[project.id] || 0]}
                      alt={`${project.title} screenshot ${(currentImageIndex[project.id] || 0) + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect width="400" height="600" fill="%23f3f4f6"%3E%3C/rect%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%236b7280" font-family="monospace" font-size="16"%3EProject Image%3C/text%3E%3C/svg%3E';
                      }}
                    />

                    {/* Carousel Controls - Only show if multiple images */}
                    {project.images.length > 1 && (
                      <>
                        {/* Arrow controls at bottom left */}
                        <div className="absolute bottom-4 left-4 flex gap-2 z-20">
                          <button
                            onClick={() => prevImage(project.id, project.images.length)}
                            className="p-3 bg-[#8b00ff] backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md"
                            aria-label="Previous image"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>

                          <button
                            onClick={() => nextImage(project.id, project.images.length)}
                            className="p-3 bg-[#8b00ff] backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md"
                            aria-label="Next image"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>

                        {/* Image counter at bottom right */}
                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#8b00ff] backdrop-blur-sm text-white font-mono text-xs z-20 shadow-md">
                          {(currentImageIndex[project.id] || 0) + 1} / {project.images.length}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn">
            <span className="btn__glitch">{projectsContent.viewAllButtonText}</span>
            {projectsContent.viewAllButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;