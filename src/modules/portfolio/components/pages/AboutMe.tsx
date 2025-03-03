import React from "react";
import DefaultLayout from "../templates/DefaultLayout";
import Card from "../atoms/Card";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import { motion } from "framer-motion";
import visal from "../../../../assets/visal1.png"; 
import { useTheme } from "../../../../shared/hooks/ThemeContext";

const About: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <DefaultLayout>
      <section
        className={`flex-1 w-full `}
      >
        <div className="p-4 md:p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Card
              className={`p-6 rounded-lg shadow-md ${
                isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
              }`}
            >
              <Image
                src={visal}
                alt="Visal Profile"
                className="w-full max-w-xs md:max-w-md rounded-lg object-cover"
              />
            </Card>
            <Card
              className={`p-6 rounded-lg shadow-md ${
                isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
              }`}
            >
              <Text
                variant="h2"
                color={isDarkTheme ? "text-orange-500" : "text-yellow-500"}
              >
                About Me
              </Text>
              <Text
                variant="p"
                color={isDarkTheme ? "text-white" : "text-black"}
                className="mt-4 text-lg md:text-xl"
              >
                I’m Visal, a passionate front-end developer based in Phnom Penh, Cambodia. With expertise in React, and TypeScript, I create intuitive and responsive web applications that drive user engagement. My journey began with a Bachelor’s in Computer Science at RUPP, followed by hands-on experience at Tech Solutions Inc. and Wing Bank. I’m dedicated to empowering businesses with cutting-edge digital solutions.
              </Text>
              <Text
                variant="p"
                color={isDarkTheme ? "text-white" : "text-black"}
                className="mt-4 text-lg md:text-xl"
              >
                My mission is to blend creativity and technology to build impactful experiences. Let’s connect to discuss how I can help you grow your brand!
              </Text>
            </Card>
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;