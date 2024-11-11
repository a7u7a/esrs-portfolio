"use client"
import { motion } from 'framer-motion';

const AnimatedShadowBox = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="w-64 h-64 bg-gray-200 rounded-lg shadow-lg"
        initial={{ boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
        whileHover={{
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          transition: { duration: 0.8, ease: "easeOut" }
        }}
      />
    </div>
  );
};

export default AnimatedShadowBox;