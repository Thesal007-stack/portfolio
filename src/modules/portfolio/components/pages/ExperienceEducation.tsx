import React from "react";
import DefaultLayout from "../templates/DefaultLayout";
import { Card } from "antd";
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import {
  CalendarOutlined,
  TrophyOutlined,
  UserOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { FaBuilding, FaGraduationCap } from "react-icons/fa";

const ExperienceEducation: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const educationData = [
    {
      degree: "Sabai Code",
      institution: "BootCamp",
      duration: "2024(6month)",
      description:
        "SabaiCode is a Phnom Penh-based education initiative focused on teaching computer science and empowering future developers.",
      link: "https://sabaicode.com",
    },
    {
      degree: "RUPP",
      institution: "University",
      gpa: "3.8/4.0",
      duration: "2020 - 2024",
      description:
        "The Royal University of Phnom Penh (RUPP), founded in 1960, has undergone a series of transformations to become the leading national university in Cambodia.",
      link: "https://www.rupp.edu.kh",
    },
    {
      degree: "Touk Meas",
      institution: "High School",
      duration: "2017 - 2020",
      description: "High School in Kampot Province.",
    },
  ];

  const experience = [
    {
      title: "Volunteer Teacher",
      company: "Rupp",
      duration: "3 Months",
      description:
        "I volunteer as a teacher at the Royal University of Phnom Penh, where I instruct first-year students in C++.",
    },
    {
      title: "Internship",
      company: "Wing Bank",
      duration: "6 Months",
      description:
        "I internship as a Front-end Developer at the Wing Bank.",
    },
  ];

  return (
    <DefaultLayout>
      <div
        className={`grid gap-6 p-4 md:p-6 lg:p-10 font-mono`}
      >
        {/* Education Card */}
        <Card
          title={
            <div
              className={`flex items-center gap-2 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              <UserOutlined className="text-blue-600" />
              <span className="text-xl md:text-2xl font-mono">Education</span>
            </div>
          }
          className={`w-full ${
            isDarkTheme
              ? "bg-gray-800 text-white border border-gray-800"
              : "bg-white text-black border border-gray-200"
          }`}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className={`w-full ${
                  isDarkTheme
                    ? "bg-gray-900 text-white border border-gray-700"
                    : "bg-gray-200 text-black"
                }`}
              >
                <div className="flex flex-col gap-3 p-4">
                  {/* Institution and Duration */}
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex items-center gap-2">
                      <FaGraduationCap className="text-gray-600" />
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {edu.institution}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm sm:text-base mt-2 sm:mt-0">
                      <CalendarOutlined />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  {/* Degree and GPA */}
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">
                      {edu.degree}
                    </h4>
                    {edu.gpa && (
                      <div className="mt-1">
                        <span
                          className={`px-2 py-1 text-sm sm:text-base rounded-md ${
                            isDarkTheme
                              ? "bg-emerald-900 text-emerald-300"
                              : "bg-emerald-50 text-emerald-700"
                          }`}
                        >
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Description */}
                  {edu.description && (
                    <p
                      className={`text-gray-600 text-sm sm:text-base leading-relaxed ${
                        isDarkTheme ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {edu.description}
                    </p>
                  )}
                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base leading-relaxed hover:text-${
                        isDarkTheme ? "gray-300" : "gray-800"
                      } transition-colors duration-300`}
                    >
                      <LinkOutlined />
                      {edu.link}
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Experience Card */}
        <Card
          title={
            <div
              className={`flex items-center gap-2 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              <TrophyOutlined className="text-blue-600" />
              <span className="text-xl md:text-2xl font-mono">Experience</span>
            </div>
          }
          className={`w-full ${
            isDarkTheme
              ? "bg-gray-800 text-white border border-gray-800"
              : "bg-white text-black border border-gray-200"
          }`}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className={`w-full ${
                  isDarkTheme
                    ? "bg-gray-900 text-white border border-gray-700"
                    : "bg-gray-200 text-black"
                }`}
              >
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex items-center gap-2">
                      <FaBuilding className="text-gray-600" />
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm sm:text-base mt-2 sm:mt-0">
                      <CalendarOutlined />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">
                      {exp.title}
                    </h4>
                  </div>
                  {exp.description && (
                    <p
                      className={`text-gray-600 text-sm sm:text-base leading-relaxed ${
                        isDarkTheme ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
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
