import DefaultLayout from "../templates/DefaultLayout";
import { Card } from "antd";
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import {
  CalendarOutlined,
  TrophyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaBuilding, FaGraduationCap } from "react-icons/fa";

const ExperienceEducation = () => {
  const { isDarkTheme } = useTheme();
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Tech University",
      duration: "2018 - 2022",
      gpa: "3.8/4.0",
      description:
        "Specialized in software development and machine learning. Coursework included advanced algorithms, distributed systems, and AI fundamentals.",
    },
    {
      degree: "High School Diploma",
      institution: "STEM Magnet School",
      duration: "2014 - 2018",
      description:
        "Specialized in software development and machine learning. Coursework included advanced algorithms, distributed systems, and AI fundamentals.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Tech University",
      duration: "2018 - 2022",
      gpa: "3.8/4.0",
      description:
        "Specialized in software development and machine learning. Coursework included advanced algorithms, distributed systems, and AI fundamentals.",
    },
    {
      degree: "High School Diploma",
      institution: "STEM Magnet School",
      duration: "2014 - 2018",
      description:
        "Specialized in software development and machine learning. Coursework included advanced algorithms, distributed systems, and AI fundamentals.",
    },
  ];

  const experience = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
      description:
        "Developed responsive web applications using React, TypeScript, and Tailwind CSS, improving user engagement by 30%.",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Designs Ltd.",
      duration: "Jun 2020 - Dec 2021",
      description:
        "Designed intuitive interfaces for mobile and web, increasing client satisfaction by 25% using Figma and Adobe XD.",
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
      description:
        "Developed responsive web applications using React, TypeScript, and Tailwind CSS, improving user engagement by 30%.",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Designs Ltd.",
      duration: "Jun 2020 - Dec 2021",
      description:
        "Designed intuitive interfaces for mobile and web, increasing client satisfaction by 25% using Figma and Adobe XD.",
    },
  ];

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-thin ">
        {/* Education Card */}
        <Card
          title={
            <div className={`flex items-center gap-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
              <UserOutlined className="text-blue-600" />
              <span className="text-xl ">Education</span>
            </div>
          }
          className={`flex-1 w-full ${isDarkTheme ? "bg-gray-800 text-white border border-gray-800" : "bg-white text-black border border-gray-200"}`}
        >
          <div className="grid grid-cols-1 gap-6">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className={`flex-1 w-full ${isDarkTheme ? "bg-gray-900 text-white border border-gray-700" : "bg-gray-200 text-black"}`}
              >
                <div className="flex flex-col gap-3">
                  {/* Institution and Duration */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      < FaGraduationCap /> 
                      <h3 className="text-lg font-semibold">{edu.institution}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarOutlined />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  {/* Degree and GPA */}
                  <div>
                    <h4 className="font-bold">{edu.degree}</h4>
                    {edu.gpa && (
                      <div className="mt-1">
                        <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-md">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Description */}
                  {edu.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Experience Card */}
        <Card
          title={
            <div className={`flex items-center gap-2 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
              <TrophyOutlined className="text-blue-600" />
              <span className="text-xl font-mono">Experience</span>
            </div>
          }
          className={`flex-1 w-full ${isDarkTheme ? "bg-gray-800 text-white border border-gray-800" : "bg-white text-black border border-gray-200"}`}
        >
          <div className="grid grid-cols-1 gap-6 ">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className={`flex-1 w-full ${isDarkTheme ? "bg-gray-900 text-white border border-gray-700" : "bg-gray-200 text-black"}`}
              >
                <div className="flex flex-col gap-3">
                  {/* Company and Duration */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <FaBuilding  />
                      <h3 className="text-lg font-semibold">{exp.company}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarOutlined />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  {/* Title */}
                  <div>
                    <h4 className="font-bold">{exp.title}</h4>
                  </div>
                  {/* Description */}
                  {exp.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default ExperienceEducation;
