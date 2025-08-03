'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export default function ProjectCard({ project }) {
  const handleExternalLink = (url, e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="group bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-800 hover:border-blue-600/50"
      whileHover={{ y: -5 }}
    >
      <Link href={`/projects/${project.slug}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl px-4 py-2 text-white font-medium border border-blue-600/30">
              View Project
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gray-900/90 backdrop-blur-sm text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
              {project.category || 'Web App'}
            </span>
          </div>
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-200 rounded-md text-xs font-medium border border-gray-700">
                {tag}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 bg-gray-800 text-gray-200 rounded-md text-xs font-medium border border-gray-700">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>
          
          {/* Links */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {project.github && (
                <button
                  onClick={(e) => handleExternalLink(project.github, e)}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-colors border border-gray-700"
                  aria-label="View GitHub repository"
                >
                  <Github size={16} />
                </button>
              )}
              {project.demo && (
                <button
                  onClick={(e) => handleExternalLink(project.demo, e)}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-colors border border-gray-700"
                  aria-label="View live demo"
                >
                  <ExternalLink size={16} />
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar size={14} />
              <span>{project.date || '2024'}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
