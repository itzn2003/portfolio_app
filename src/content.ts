// Portfolio Website Content
// This file contains all text content, personal information, and project data
// Update this file to change website content without modifying component files

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  githubLink?: string;
  liveLink?: string;
  githubButtonText?: string;
  liveButtonText?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile';
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
}

export interface ContactInfo {
  icon: 'email' | 'location' | 'phone';
  label: string;
  value: string;
}

// =============================================================================
// PERSONAL INFORMATION
// =============================================================================

export const personalInfo = {
  name: 'ZAYN A. HASHIM',
  firstName: 'Zayn',
  lastName: 'Hashim',
  initials: 'ZAH',
  title: 'SOFTWARE DEVELOPER',
  location: 'Baghdad, Iraq',
  email: 'zayn.hashim.dev@gmail.com',
  phone: '+964 771 562 4741', // Optional
  status: 'Available for hire',
  profileImage: '/images/me.jpg',
};

// =============================================================================
// HERO SECTION
// =============================================================================

export const heroContent = {
  badge: personalInfo.title,
  name: personalInfo.name,
  tagline: 'Building scalable, modern web applications with clean code and thoughtful design',
  primaryCTA: 'View Projects',
  secondaryCTA: 'Contact Me',
};

// =============================================================================
// ABOUT SECTION
// =============================================================================

export const aboutContent = {
  badge: 'ABOUT ME',
  heading: 'Building the future, one line at a time',
  paragraphs: [
    "I'm a full-stack developer with a passion for creating seamless digital experiences. With expertise in modern web technologies, I transform complex problems into elegant, scalable solutions.",
    
    "My journey in software development has taught me that the best solutions emerge from the intersection of creativity and technical precision. I specialize in React, TypeScript, Node.js, and building architectures that stand the test of time.",
    
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and staying current with industry trends.",
  ],
  infoCards: [
    {
      label: 'Location',
      value: personalInfo.location,
    },
    {
      label: 'Status',
      value: personalInfo.status,
    },
  ],
  image: personalInfo.profileImage,
  imageAlt: `${personalInfo.firstName} ${personalInfo.lastName} - Profile Photo`,
};

// =============================================================================
// PROJECTS SECTION
// =============================================================================

export const projectsContent = {
  badge: 'PORTFOLIO',
  heading: 'Featured Projects',
  subheading: 'A selection of my recent work, showcasing expertise in software development',
  viewAllButtonText: 'View All Projects',
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Box System',
    description: 'A functional smart box system that allows users to securely store and manage their belongings using IoT technology. Features include remote access, real-time monitoring, and automated alerts. Features an app for the users to interact with the smart box system, a dashboard for admins to manage boxes, and a landing page for marketing purposes.',
    tech: ['React', 'TypeScript', 'Node.js', 'Firebase', 'Flutter', 'Hardware Integration'],
    images: ['/images/img1.png', '/images/img2.png', '/images/img3.png'],
    githubLink: 'https://github.com/itzn2003/smart_box_app_demo',
    liveLink: 'https://smartbox.com.iq/',
    githubButtonText: 'View Code',
    liveButtonText: 'Visit Website',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool featuring real-time updates, team collaboration, custom workflows, and comprehensive analytics for tracking productivity.',
    tech: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    images: ['/images/img1.png', '/images/img2.png', '/images/img3.png'],
    githubLink: 'https://github.com/itzn2003/smart_box_app_demo',
    liveLink: 'https://taskapp-demo.example.com',
    githubButtonText: 'View Project',
    liveButtonText: 'Live Demo',
  },
  {
    id: 3,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered message suggestions, sentiment analysis, and smart notifications. Features end-to-end encryption for secure communication.',
    tech: ['React', 'WebSocket', 'Python', 'TensorFlow', 'Redis'],
    images: ['/images/img1.png', '/images/img2.png', '/images/img3.png'],
    githubLink: 'https://github.com/yourusername/ai-chat',
    liveLink: 'https://aichat-demo.example.com',
    githubButtonText: 'Source Code',
    liveButtonText: 'Try it Live',
  },
];

// =============================================================================
// SKILLS SECTION
// =============================================================================

export const skillsContent = {
  badge: 'EXPERTISE',
  heading: 'Skills & Technologies',
  subheading: 'Proficient in modern web technologies and industry best practices',
  toolsSectionHeading: 'Tools & Methodologies',
};

export const skills: Skill[] = [
  // Frontend
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'Flutter', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  
  // Backend
  {name: 'Firebase', level: 95, category: 'Backend'},
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Python', level: 90, category: 'Backend' },
  { name: 'AWS', level: 80, category: 'Backend' },

  
  // Database
  { name: 'PostgreSQL', level: 87, category: 'Database' },
  { name: 'MongoDB', level: 83, category: 'Database' },
  
  // Mobile
  { name: 'Flutter', level: 90, category: 'Mobile' },
  { name: 'Android', level: 85, category: 'Mobile' },
  { name: 'IOS', level: 78, category: 'Mobile' },

];

export const tools = [
  'Git',
  'REST APIs',
  'System Design',
  'CI/CD',
  'Agile',
  'TDD',
  'Microservices',
  'WebSocket',
  'Redis',
];

// =============================================================================
// CONTACT SECTION
// =============================================================================

export const contactContent = {
  badge: 'GET IN TOUCH',
  heading: "Let's Work Together",
  subheading: "Have a project in mind? Feel free to reach out and let's discuss how we can collaborate",
  contactInfoHeading: 'Contact Information',
  socialLinksHeading: 'Social Links',
  formHeading: 'Send a Message',
  submitButtonText: 'Send Message',
};

export const contactInfo: ContactInfo[] = [
  {
    icon: 'email',
    label: 'Email',
    value: personalInfo.email,
  },
  {
    icon: 'location',
    label: 'Location',
    value: personalInfo.location,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    handle: 'itzn2003',
    url: 'https://github.com/itzn2003',
  },
  {
    name: 'LinkedIn',
    handle: 'Zayn Al Hasani',
    url: 'https://www.linkedin.com/in/zayn-al-hasani-0439a0265/',
  },
  {
    name: 'Telegram',
    handle: '@It_zn',
    url: 'https://t.me/It_zn',
  },
];

export const contactFormFields = {
  name: {
    label: 'Name',
    placeholder: 'Your name',
    type: 'text' as const,
    required: true,
  },
  email: {
    label: 'Email',
    placeholder: 'your.email@example.com',
    type: 'email' as const,
    required: true,
  },
  message: {
    label: 'Message',
    placeholder: 'Tell me about your project...',
    rows: 6,
    required: true,
  },
};

// =============================================================================
// FOOTER
// =============================================================================

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} ${personalInfo.firstName} A. ${personalInfo.lastName}. All rights reserved.`,
  builtWith: 'Built with React, TypeScript & Tailwind CSS',
};

// =============================================================================
// NAVIGATION
// =============================================================================

export const navigationItems = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'contact', label: 'CONTACT' },
] as const;

// =============================================================================
// SEO / META DATA (Optional - for future use)
// =============================================================================

export const seoData = {
  title: `${personalInfo.firstName} ${personalInfo.lastName} - ${personalInfo.title}`,
  description: heroContent.tagline,
  keywords: [
    'full stack developer',
    'web developer',
    'React developer',
    'TypeScript developer',
    'Node.js developer',
    personalInfo.firstName,
    personalInfo.lastName,
  ],
  ogImage: '/images/og-image.jpg', // Open Graph image for social sharing
  twitterHandle: '@zayn_hashim',
};