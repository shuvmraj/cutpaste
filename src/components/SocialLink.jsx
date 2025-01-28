import React from 'react'
import { Github, Linkedin, Globe } from 'lucide-react';

function SocialLink() {
  return (
    <div className="flex items-center gap-6">
          {/* GitHub */}
          <a 
            href="https://github.com/shuvmraj" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-blue-400 hover:text-purple-500 transition duration-300" />
          </a>
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/shubham-raj-b8185a311/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-blue-400 hover:text-purple-500 transition duration-300" />
          </a>
          {/* Website */}
          <a 
            href="https://shuvm.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Website"
          >
            <Globe className="w-6 h-6 text-blue-400 hover:text-purple-500 transition duration-300" />
          </a>
        </div>
  )
}

export default SocialLink
