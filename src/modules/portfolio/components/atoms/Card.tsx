import React from "react";
import { useTheme } from "../../../../shared/hooks/ThemeContext"; // Adjust the path to ThemeContext

interface CardProps {
  children: React.ReactNode;
  className?: string; // Optional custom classes for additional styling
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  const { isDarkTheme } = useTheme(); // Access the theme state

  return (
    <div
      className={`relative p-4 rounded-lg shadow-md ${
        isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
      } ${className}`} // Apply theme-aware base styles and custom classes
    >
      {children}
    </div>
  );
};

export default Card;