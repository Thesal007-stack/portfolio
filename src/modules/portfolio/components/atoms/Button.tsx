import React from 'react';
import { Link } from 'react-router-dom'; 

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'default'; // Add more variants as needed
  className?: string;
  to?: string; // Optional prop for routing
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  className = '',
  to,
  onClick,
}) => {
  const baseClasses = "px-4 py-2 rounded font-semibold transition-colors duration-300";
  const variantClasses = variant === 'primary' ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-800 text-white hover:bg-gray-700';

  if (to) {
    // Render as a Link if 'to' prop is provided
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