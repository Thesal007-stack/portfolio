import React from 'react';
import { Link } from 'react-router-dom'; 

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'default'; 
  className?: string;
  to?: string; 
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  className = '',
  to,
  onClick,
}) => {
  const baseClasses = "py-2 px-10 rounded font-semibold transition-colors duration-300";
  const variantClasses = variant === 'primary' ? 'bg-red-500 text-white hover:bg-red-600 ' : 'bg-gray-800 text-white hover:bg-gray-700';

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {children}
      </Link>
    );
  }

  // Render as a regular button if no 'to' prop
  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;