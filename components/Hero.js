'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const skills = [
    'Full Stack Developer',
    'React.js Developer',
    'Application Developer',
    'UI/UX Designer',
    'Problem Solver',
    'IT Professional'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-12 lg:py-20 bg-black pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
                        {/* Greeting */}
            <div className="space-y-3 lg:space-y-4">
              <motion.p
                className="text-base md:text-lg lg:text-xl text-blue-500 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                👋 Hello, I'm
              </motion.p>
              
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Rohit Tarkeshwar Pandey
              </motion.h1>
            </div>

            {/* Typewriter Animation */}
            <motion.div
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-400 min-h-[2rem] lg:min-h-[2.5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Typewriter
                options={{
                  strings: skills,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                  cursor: '|'
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Passionate Full Stack Developer with a love for learning and building impactful digital solutions. Always eager to grow and take on new challenges.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 lg:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 lg:px-8 py-2.5 lg:py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold group"
              >
                View Projects
                <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform lg:w-5 lg:h-5" />
              </Link>
              
              <a
                href="/resume/resume.pdf"
                download
                className="inline-flex items-center justify-center px-6 lg:px-8 py-2.5 lg:py-3 border-2 border-blue-600 text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold group"
              >
                Download Resume
                <Download size={18} className="ml-2 group-hover:translate-y-1 transition-transform lg:w-5 lg:h-5" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-3 lg:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a
                href="https://github.com/pandey8369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 lg:p-3 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-300"
              >
                <Github size={20} className="lg:w-6 lg:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-pandey-431577274/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 lg:p-3 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-300"
              >
                <Linkedin size={20} className="lg:w-6 lg:h-6" />
              </a>
              <a
                href="mailto:pandeyjirohit666@gmail.com"
                className="p-2.5 lg:p-3 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-300"
              >
                <Mail size={20} className="lg:w-6 lg:h-6" />
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
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Avatar container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 p-2 shadow-2xl shadow-blue-500/25">
                <div className="w-full h-full rounded-full bg-gray-900 p-1">
                  {/* Actual avatar image */}
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
    </section>
  );
}
