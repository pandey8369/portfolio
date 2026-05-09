import { projects } from '@/lib/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-16 lg:pt-20">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-white mb-2">Project not found</h1>
          <p className="text-gray-300 mb-6">The project you're looking for doesn't exist.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-16 lg:pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 mb-8 border border-gray-800">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
              {project.category || 'Web App'}
            </span>
            {project.featured && (
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                Featured
              </span>
            )}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar size={14} />
              <span>{project.date || '2024'}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 mb-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Tag size={24} className="text-blue-500" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tag, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium border border-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">Project Links</h2>
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition-colors border border-gray-700"
              >
                <Github size={20} />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
            {!project.github && !project.demo && (
              <p className="text-gray-400">No external links available for this project.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
