import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string; 
  width?: string;   
  height?: string;   
}

const Image: React.FC<ImageProps> = ({ src, alt, className = '', width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`} 
      style={{ width, height }}             
    />
  );
};

export default Image;