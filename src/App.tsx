import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { ThemeProvider } from "./shared/hooks/ThemeContext";
import Home from "./modules/portfolio/components/pages/Home";
import Skills from "./modules/portfolio/components/pages/skill";
import ExperienceEducation from "./modules/portfolio/components/pages/ExperienceEducation";
import TechStack from "./modules/portfolio/components/pages/TechStack";
import Blog from "./modules/portfolio/components/pages/Blog";

const App: React.FC = () => {
  return (
    <ThemeProvider> 
      <Router>
        <div className="flex flex-col"
        // className={` flex flex-col ${isDarkTheme ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <main className="flex-1"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience-education" element={<ExperienceEducation />} />
              <Route path="/tech-stack" element={<TechStack />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;