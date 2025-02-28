import React from 'react';
import { motion } from 'framer-motion';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'p';
  color?: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, variant = 'p', color = 'text-white' ,className}) => {
  const variantStyles = {
    h1: 'text-4xl font-bold',
    h2: 'text-2xl font-semibold',
    p: 'text-base',
  };

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={`${variantStyles[variant]} ${color} ${className}`}
      initial="hidden"
      animate="visible"
      variants={textVariants}
      
    >
      {children}
    </motion.div>
  );
};

export default Text;