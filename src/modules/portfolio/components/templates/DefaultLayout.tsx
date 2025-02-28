import React from "react";
import Header from "../molecules/Header";
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import SocialLinks from "../molecules/SocialLinks";
interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkTheme } = useTheme();

  return (
    <div className={` flex flex-col min-h-screen    ${isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
         <Header />
      <main className="flex-1">
        {children}
      </main>
      <SocialLinks/>
    </div>

  );
};

export default DefaultLayout;