import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the theme context type
interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "light" ? false : true 
  );

  const toggleTheme = () => {
    setIsDarkTheme((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light"); 
      return newTheme;
    });
  };

  const value = { isDarkTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div className={`${isDarkTheme ? "dark" : "light"}  `}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
