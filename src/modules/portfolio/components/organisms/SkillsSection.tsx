import React from "react";
import Text from "../atoms/Text";
import { Card } from "antd";
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

const SkillsSection: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const skills = [
    { name: "React & Next.js", icon: FaReact, label: "Frontend" },
    { name: "Node.js & Express.js", icon: FaNodeJs, label: "Backend" },
    { name: "Full-Stack Development", icon: FaLaptopCode, label: "Development" },
    { name: "API & Server Management", icon: FaServer, label: "Backend" },
    { name: "Database & ORM", icon: FaDatabase, label: "Database" },
  ];

  return (
    <section className="p-10 text-white font-mono">
      <Text variant="h1" color="text-orange-500">
        My Skills
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <Card
              key={index}
              title={<span className="text-gray-500">{skill.name}</span>}
              className={`mt-4 rounded-lg shadow-md font-mono font-bold border-none transition-shadow duration-300 ${isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-300 text-black"}`}
            >
              <div className="relative">
                <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-md ${isDarkTheme ? "bg-blue-900" : "bg-blue-200"} flex items-center justify-center`}>
                  <IconComponent className="text-white text-2xl" />
                </div>
                <div className="mt-14 text-center">
                  <p className="text-gray-500">{skill.label}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
