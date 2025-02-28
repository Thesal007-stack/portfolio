import React from "react";
import Text from "../atoms/Text";
import { Link, useLocation } from "react-router-dom"; 
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "../../../../shared/hooks/ThemeContext";

const Header: React.FC = () => {
  const location = useLocation(); 
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <header
      className={`flex font-mono justify-between items-center p-4 `}
    >
      <Link to="/" onClick={(e) => { e.preventDefault(); toggleTheme(); }}> 
        <Text variant="h2" color={isDarkTheme ? "text-orange-500" : "text-yellow-500"}>
          {isDarkTheme ? <SunOutlined /> : <MoonOutlined />} 
        </Text>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`text-gray-400 hover:text-${isDarkTheme ? "white" : "black"} ${
                location.pathname === "/" 
                  ? "bg-white text-black rounded-full px-3 py-1 transition-colors duration-300" 
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`text-gray-400 hover:text-${isDarkTheme ? "white" : "black"} ${
                location.pathname === "/skills" 
                  ? "bg-white text-black rounded-full px-3 py-1 transition-colors duration-300" 
                  : ""
              }`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/tech-stack"
              className={`text-gray-400 hover:text-${isDarkTheme ? "white" : "black"} ${
                location.pathname === "/tech-stack" 
                  ? "bg-white text-black rounded-full px-3 py-1 transition-colors duration-300" 
                  : ""
              }`}
            >
              TechStack
            </Link>
          </li>
        </ul>
      </nav>
      <Text variant="p" color={isDarkTheme ? "text-gray-400" : "text-gray-600"}>
        hellotazrin@gmail.com
      </Text>
    </header>
  );
};

export default Header;