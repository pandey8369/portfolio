'use client';
import ContactInfo from '@/components/ContactInfo';
import { motion } from 'framer-motion';
import { Download, FileText, User, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-16 lg:pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6 border border-blue-600/30">
            <MessageCircle size={32} className="text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Get in touch or download my resume to learn more about my experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-600/30">
                <User size={20} className="text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Details</h2>
            </div>
            <ContactInfo />
          </motion.div>

          {/* Resume Download */}
          <motion.div
            className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-600/30">
                <FileText size={20} className="text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Resume</h2>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                  <FileText size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rohit Pandey</h3>
                <p className="text-gray-300 mb-4">Full Stack Developer</p>
                <p className="text-sm text-gray-400 mb-6">
                  Download my comprehensive resume to learn more about my skills, experience, and projects.
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="/resume/resume.pdf"
                  download
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl"
                >
                  <Download size={20} />
                  <span className="font-semibold">Download Resume (PDF)</span>
                </a>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Last updated: {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Let's Work Together</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, and creative ideas. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
