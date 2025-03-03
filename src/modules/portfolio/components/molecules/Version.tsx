import React from "react";
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import { FiGitBranch } from "react-icons/fi";

interface VersionModuleProps {
  version: string; 
  className?: string; //
}

const VersionModule: React.FC<VersionModuleProps> = ({ version, className = "" }) => {
  const { isDarkTheme } = useTheme(); 

  return (
    <div
      className={`flex items-center gap-2  rounded-md font-mono${className}`} 
    >
      <FiGitBranch
        className={`text-xl ${
          isDarkTheme ? "text-blue-400" : "text-blue-600"
        } transition-colors duration-300`}
      />
      <span className="text-sm md:text-base font-semibold text-gray-500">
        {version}
      </span>
    </div>
  );
};

export default VersionModule;