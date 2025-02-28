import React, { useState, useEffect } from "react";
import Text from "../atoms/Text";
import { Link, useLocation } from "react-router-dom"; 
import { SunOutlined, MoonOutlined, MenuOutlined } from "@ant-design/icons"; // Import MenuOutlined for hamburger
import { useTheme } from "../../../../shared/hooks/ThemeContext";

const Header: React.FC = () => {
  const location = useLocation(); 
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); 
  }, [location.pathname]);

  return (
    <header
      className={`flex  font-mono justify-between items-center p-4 
      transition-colors duration-300 lg:ml-2 lg:gap-10`}
    >
      <Link to="/" onClick={(e) => { e.preventDefault(); toggleTheme(); }}> 
        <Text variant="h2" color={isDarkTheme ? "text-orange-500" : "text-yellow-500"}>
          {isDarkTheme ? <SunOutlined /> : <MoonOutlined />} 
        </Text>
      </Link>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className={`p-2  rounded focus:outline-none ${
            isDarkTheme ? "text-white hover:bg-gray-700" : "text-black hover:bg-gray-300"
          }`}
        >
          <MenuOutlined />
        </button>
      </div>
 
      <nav className="flex-1 relative ">
        <ul
          left="-8"
          className={`
            ${isMenuOpen
              ? `flex flex-col absolute mt-4 right-0  ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-100' } text-white p-4 rounded-lg shadow-lg z-50 `
              : "hidden"
            } md:flex md:flex-row md:relative md:top-0 md:right-0 md:bg-transparent md:text-inherit md:p-0 md:shadow-none`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)} 
              className={`block py-2 px-4 text-gray-400 hover:text-${isDarkTheme ? "white" : "black"} ${
                location.pathname === "/" 
                  ? "bg-white text-black rounded-full transition-colors duration-300" 
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => setIsMenuOpen(false)} 
              className={`block py-2 px-4 text-gray-400 hover:text-${isDarkTheme ? "white" : "black"} ${
                location.pathname === "/skills" 
                  ? "bg-white text-black rounded-full transition-colors duration-300" 
                  : ""
              }`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/tech-stack"
              onClick={() => setIsMenuOpen(false)} 
              className={`block py-2 px-4 text-gray-400 hover:text-${isDarkTheme ? "white" : "black"} ${
                location.pathname === "/tech-stack" 
                  ? "bg-white text-black rounded-full transition-colors duration-300" 
                  : ""
              }`}
            >
              TechStack
            </Link>
          </li>
        </ul>
      </nav>
      <Text
        variant="p"
        color={isDarkTheme ? "text-gray-400" : "text-gray-600"}
        className="hidden md:block"
      >
        hellotazrin@gmail.com
      </Text>
    </header>
  );
};

export default Header;