import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full py-2 bg-black border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-xs">
          Secure, ephemeral text sharing - No storage, no traces.
        </p>
        <p className="text-gray-500 text-xs">
          Designed & Crafted by Shubham Raj © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;