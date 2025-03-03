import React from "react";
import { useTheme } from "../../../../shared/hooks/ThemeContext"; 
interface CardProps {
  children: React.ReactNode;
  className?: string; 
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  const { isDarkTheme } = useTheme(); 

  return (
    <div
      className={`relative p-4 rounded-lg shadow-md ${
        isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;