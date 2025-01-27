import React from 'react';
import { Scissors, Sparkles, Github, Linkedin, Globe } from 'lucide-react';

export const Header = () => {
  return (
    <header className="py-6 border-b border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-display">
            CutPaste
          </h1>
          <Scissors className="w-6 h-6 text-blue-500 transform rotate-330" />
        </div>
        
        {/* Social Links Section */}
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
            href="https://shuvmraj.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Website"
          >
            <Globe className="w-6 h-6 text-blue-400 hover:text-purple-500 transition duration-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
