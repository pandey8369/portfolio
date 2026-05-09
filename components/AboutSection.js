'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Code,
  Globe,
  Smartphone,
  Palette,
  Zap,
  Calendar,
  MapPin,
  Mail,
  Github,
  CheckCircle,
  Star
} from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'Next.js', icon: '▲' },
  { name: 'React', icon: '⚛️' },
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'HTML/CSS', icon: '🌐' },
  { name: 'Flutter', icon: '📱' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'API Integration', icon: '🔌' },
  { name: 'Jupyter Notebook', icon: '📓' },
  { name: 'Django', icon: '🐍' },
  { name: 'SEO', icon: '📈' },
  { name: 'UI/UX Design', icon: '🎨' },
  { name: 'Shopify', icon: '🛒' },
  { name: 'WordPress', icon: '📝' },
  { name: 'Django REST', icon: '🔌' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Liquid', icon: '💧' },
  { name: 'GSAP', icon: '🎬' },
  { name: 'ThreeJS', icon: '🧊' }
];

const techStack = [
  { name: 'Android Studio', icon: '🤖' },
  { name: 'Visual Studio Code', icon: '💻' },
  { name: 'Firestore', icon: '🔥' },
  { name: 'Git & GitHub', icon: '📚' },
  { name: 'Postman', icon: '🚀' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'LeetCode', icon: '🧮' },
  { name: 'Shadcn', icon: '🎯' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'SQL Server', icon: '🗄️' }
];

const experiences = [
  {
    year: 'Dec 2023 - Present',
    title: 'Full Stack Developer',
    company: 'Plug N Play Biosciences',
    description: 'Full stack development and maintaining CAMIA website on Shopify.',
    achievements: ['Full stack development', 'Shopify website maintenance', 'CAMIA platform management']
  },
  {
    year: 'May 2025 - July 2025',
    title: 'Full Stack Developer',
    company: 'Upahar',
    description: 'Full stack development of upahar website using next.js and firebase as backend.',
    achievements: ['Full stack development', 'Next.js and Firebase', 'Data cleaning and management (Companies Catalog)']
  },
  {
    year: 'May 2024 - Dec 2024',
    title: 'Freelance Web Developer',
    company: 'Scrapwale',
    description: 'End-to-end handling of database, website development and social media post creation.',
    achievements: ['Database management', 'Website development', 'Social media content creation']
  }
];

const education = [
  {
    degree: 'Bachelor\'s in Computer Science',
    institution: 'University of Mumbai',
    details: '8.98 CGPA (July 2022 – April 2025)'
  },
  {
    degree: 'HSC - IT (Bifocal)',
    institution: 'S.I.W.S College, Mumbai',
    details: '65.50% (May 2020 – June 2022)'
  },
  {
    degree: 'SSC (School Certificates)',
    institution: 'Jai Bharat English High School',
    details: '74.80% (Passed March 2020)'
  },
  {
    degree: 'Backend Development & APIs',
    institution: 'freeCodeCamp',
    details: 'Professional Certification'
  },
  {
    degree: 'Scientific Computing in Python',
    institution: 'freeCodeCamp',
    details: 'Professional Certification'
  },
  {
    degree: 'Project Management',
    institution: 'Great Learning',
    details: 'Professional Certification'
  }
];

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <motion.section
        className="relative py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  About Me
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  About{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Rohit Pandey
                  </span>
                </motion.h1>
              </div>

              <motion.p
                className="text-lg lg:text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I'm a Full Stack Developer with over 2 years of experience developing scalable and production-ready web applications for frontend and backend systems. Skilled in JavaScript, React, NextJS, Django REST Framework, PostgreSQL, Firebase, and Shopify development. Experienced in REST API development, user authentication, ecommerce customization, performance optimization, and cloud integration. Strong background in building booking platforms, data-driven applications, and responsive web solutions with a focus on performance and user experience.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="mailto:pandeyjirohit666@gmail.com"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-700"
                >
                  <Mail size={16} className="text-blue-500" />
                  <span className="text-gray-300">pandeyjirohit666@gmail.com</span>
                </a>
                <a
                  href="https://github.com/pandey8369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-700"
                >
                  <Github size={16} className="text-gray-300" />
                  <span className="text-gray-300">GitHub</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Avatar */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full p-2 shadow-2xl shadow-blue-500/25">
                  <div className="w-full h-full rounded-full bg-gray-900 p-1">
                    <Image
                      src="/images/rohit.jpg"
                      alt="Rohit Tarkeshwar Pandey"
                      width={384}
                      height={384}
                      className="w-full h-full rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-lg sm:text-2xl">⚡</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/50"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <span className="text-sm sm:text-xl">🚀</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to create amazing digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6 flex items-center space-x-2">
                <Code size={20} className="text-blue-500 lg:w-6 lg:h-6" />
                <span>Skills</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gray-800 rounded-lg lg:rounded-xl p-3 lg:p-4 text-center hover:bg-blue-600/20 transition-all duration-300 border border-gray-700"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-xl lg:text-2xl mb-1 lg:mb-2">{skill.icon}</div>
                    <span className="font-medium text-gray-200 text-xs lg:text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 lg:mb-6 flex items-center space-x-2">
                <Zap size={20} className="text-blue-400 lg:w-6 lg:h-6" />
                <span>Tech Stack</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="bg-gray-800 rounded-lg lg:rounded-xl p-3 lg:p-4 text-center hover:bg-blue-600/20 transition-all duration-300 border border-gray-700"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-xl lg:text-2xl mb-1 lg:mb-2">{tech.icon}</div>
                    <span className="font-medium text-gray-200 text-xs lg:text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My experience in the tech industry and the companies I've worked with
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 lg:mt-0">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-gray-400 text-sm lg:text-base">{exp.year}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm lg:text-base">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs lg:text-sm border border-blue-600/30">
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My academic background and professional certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-600/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 text-sm">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
