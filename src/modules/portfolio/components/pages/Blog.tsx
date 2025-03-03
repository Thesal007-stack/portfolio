import React from "react";
import DefaultLayout from "../templates/DefaultLayout";
import Card from "../atoms/Card";
import {
  BulbOutlined,
  RocketOutlined,
  TeamOutlined,
  HeartOutlined,
} from "@ant-design/icons"; 
import Text from "../atoms/Text";
import { useTheme } from "../../../../shared/hooks/ThemeContext";

const Blog: React.FC = () => {
  const { isDarkTheme } = useTheme(); 

  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive web solutions using React and TypeScript.",
      icon: RocketOutlined,
    },
    {
      title: "Teaching Front-end and C++",
      description: "Expert instruction in front-end development with React, TypeScript, and C++ programming for robust applications.",
      icon: BulbOutlined, 
    },
    {
      title: "Consulting",
      description: "Expert advice on tech stack selection and project strategy.",
      icon: TeamOutlined,
    },
  ];

  const sponsors = [
    {
      name: "NASA.",
      logo: "https://th.bing.com/th/id/OIP.57CTCCg3gSEsWXCHx6Q2wgHaGi?rs=1&pid=ImgDetMain", 
      description: "Leading tech innovation provider.",
      icon: HeartOutlined,
    },
    {
      name: "Tesla.",
      logo: "https://th.bing.com/th/id/OIP.jr-2f6DyVoxWFs9VelV-cAAAAA?rs=1&pid=ImgDetMain", 
      description: "Premier design and development agency.",
      icon: HeartOutlined,
    },
  ];

  return (
    <DefaultLayout>
      <section
      >
        <div className="p-4 md:p-6 lg:p-10 font-mono">
          {/* Welcome Section */}
          <div className="mb-10 text-center">
            <Text 
              variant="h1"
              className={isDarkTheme ? "text-orange-500" : "text-yellow-500"}
            >
              Welcome Everyone!
            </Text>
            <p className="mt-4 text-lg md:text-xl">
              Explore our blog for insights, services, and partnerships in the tech world.
            </p>
          </div>

          <div className="mb-10">
            <Text
              className={isDarkTheme ? "text-orange-500" : "text-yellow-500"}
            >
              Our Services
            </Text>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className={`p-4 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-${
                      isDarkTheme ? "gray-700" : "gray-400"
                    } ${
                      isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent
                        className={isDarkTheme ? "text-blue-400" : "text-blue-600"}
                      />
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-400">{service.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <Text
              className={isDarkTheme ? "text-orange-500" : "text-yellow-500"}
            >
              Our Sponsors
            </Text>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsors.map((sponsor, index) => {
                const IconComponent = sponsor.icon;
                return (
                  <Card
                    key={index}
                    className={`p-4 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-${
                      isDarkTheme ? "gray-700" : "gray-400"
                    } ${
                      isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="w-24 h-24 object-contain rounded-md"
                      />
                      <div className="flex items-center gap-2">
                        <IconComponent
                          className={isDarkTheme ? "text-blue-400" : "text-blue-600"}
                        />
                        <h3 className="text-lg font-semibold">{sponsor.name}</h3>
                      </div>
                      <p className="text-gray-400 text-center">
                        {sponsor.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Blog;