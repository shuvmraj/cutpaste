import React from 'react';
import { Scissors, Sparkles, Github, Linkedin, Globe } from 'lucide-react';
import SocialLink from './SocialLink';

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
        <SocialLink />
      </div>
    </header>
  );
};

export default Header;
