import React from "react";
import Header from "../molecules/Header";
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import SocialLinks from "../molecules/SocialLinks";
import VersionModule from "../molecules/Version"
interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={` flex flex-col min-h-screen font-mono    ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <SocialLinks />
      <VersionModule version={"1.0.0"}/>
    </div>
  );
};

export default DefaultLayout;
