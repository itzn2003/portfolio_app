import React, { useEffect, useRef, useState } from 'react';
import { contactInfo, socialLinks, contactContent, contactFormFields } from '../content';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Icon components based on type
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'email':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'location':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'phone':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-white"
    >
      <div className={`max-w-6xl mx-auto w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 bg-cyber-yellow text-black text-xs font-mono font-medium tracking-wider mb-4">
            {contactContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-4">
            {contactContent.heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {contactContent.subheading}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 border border-gray-200">
              <h3 className="text-xl font-display font-bold mb-8 text-black flex items-center">
                <span className="inline-block w-1 h-6 bg-cyber-yellow mr-3"></span>
                {contactContent.contactInfoHeading}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-black mr-4 mt-1">
                      {getIcon(info.icon)}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="font-medium text-black">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 border border-gray-200">
              <h3 className="text-xl font-display font-bold mb-8 text-black flex items-center">
                <span className="inline-block w-1 h-6 bg-cyber-yellow mr-3"></span>
                {contactContent.socialLinksHeading}
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between w-full px-5 py-4 bg-white border border-gray-200 hover:border-black transition-all duration-300"
                  >
                    <div>
                      <span className="text-sm text-gray-500">{social.name}</span>
                      <p className="font-mono text-black">{social.handle}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="text-xl font-display font-bold mb-8 text-black flex items-center">
              <span className="inline-block w-1 h-6 bg-cyber-yellow mr-3"></span>
              {contactContent.formHeading}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contactFormFields.name.label}
                </label>
                <input
                  type={contactFormFields.name.type}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-black focus:outline-none focus:border-black transition-colors"
                  placeholder={contactFormFields.name.placeholder}
                  required={contactFormFields.name.required}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contactFormFields.email.label}
                </label>
                <input
                  type={contactFormFields.email.type}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-black focus:outline-none focus:border-black transition-colors"
                  placeholder={contactFormFields.email.placeholder}
                  required={contactFormFields.email.required}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contactFormFields.message.label}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={contactFormFields.message.rows}
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-black focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder={contactFormFields.message.placeholder}
                  required={contactFormFields.message.required}
                />
              </div>
              
              <button
                type="submit"
                className="btn w-full"
              >
                <span className="btn__glitch">{contactContent.submitButtonText}</span>
                {contactContent.submitButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;