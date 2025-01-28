import React, { useEffect, useState } from "react";
import { Scissors, Star } from "lucide-react";
import { motion } from "framer-motion";

const Preloader = ({ setIsLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show preloader for 3 seconds
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-5xl font-bold"
      >
        <span>CutPaste</span>
        <Scissors className="text-blue-500 rotate-330 w-10 h-10" />
      </motion.div>
    </div>
  );
};

export default Preloader;
