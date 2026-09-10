import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaJava,
  FaShieldAlt
} from 'react-icons/fa';

import profileImg from '../assets/Osama_DP.png';
import citizenAssistImg from '../assets/CitizenAssistAI.png';
import nexoraImg from '../assets/nexora.jpeg';
import portfolioImg from '../assets/portfolio.jpeg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Programming',
    icon: FaJava,
    description:
      'Strong foundation in programming, object-oriented concepts, and problem-solving.',
    tags: ['Java', 'JavaScript', 'SQL', 'OOP']
  },

  {
    title: 'Frontend Development',
    icon: FaReact,
    description:
      'Building responsive and interactive user interfaces using modern frontend technologies.',
    tags: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']
  },

  {
    title: 'Backend Development',
    icon: FaServer,
    description:
      'Developing scalable backend services and RESTful APIs using Java and Spring technologies.',
    tags: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'JDBC', 'Hibernate/JPA']
  },

  {
    title: 'Database',
    icon: FaDatabase,
    description:
      'Working with relational and NoSQL databases for efficient data storage and management.',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB']
  },

  {
    title: 'Security & Architecture',
    icon: FaShieldAlt,
    description:
      'Implementing secure authentication and authorization with modern application architecture.',
    tags: ['Spring Security', 'JWT', 'Microservices', 'Spring Cloud', 'Eureka', 'API Gateway']
  },

  {
    title: 'Tools & Core CS',
    icon: FaTools,
    description:
      'Using modern development tools while strengthening core computer science fundamentals.',
    tags: ['Git', 'GitHub', 'Postman', 'Docker', 'DSA', 'DBMS']
  }
];



export const projects = [
  {
    title: "CitizenAssist AI",
    description:
      "An AI-powered civic complaint management platform that enables citizens to report issues and helps departments manage and resolve complaints efficiently.",
    image: citizenAssistImg,
    tech: ["React", "Spring Boot", "MongoDB", "Spring Security", "JWT"],
    demo: "https://citizenassist-frontend.onrender.com",
    code: "https://github.com/Osama5099/CitizenAssist-AI"
  },

  {
    title: "Nexora Fitness Platform",
    description:
      "A full-stack fitness platform built with a microservices architecture for managing users, activities, and personalized fitness recommendations.",
    image: nexoraImg,
    tech: ["React", "Spring Boot", "Microservices", "MongoDB", "PostgreSQL"],
    demo: "YOUR_NEXORA_LINK",
    code: "YOUR_GITHUB_LINK"
  },

  {
    title: "Developer Portfolio",
    description:
      "A responsive personal portfolio website showcasing my skills, projects, education, and experience as a Full Stack Developer.",
    image: portfolioImg,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    demo: "YOUR_PORTFOLIO_LINK",
    code: "YOUR_GITHUB_LINK"
  }
];

export const workData = [
  {
    role: "Software Development Intern",
    company: "Saiket Systems",
    duration: "Jun 2026 - Jul 2026",
    description:
      "Worked on software development tasks involving application development, problem-solving, testing, and implementation of programming concepts while gaining exposure to real-world software development practices.",
    color: "purple"
  }
];