import React, { useEffect, useState } from "react";
import DefaultLayout from "../templates/DefaultLayout";
import { Card, List, Avatar } from "antd";
import {
  CodeOutlined,
} from "@ant-design/icons";
import { CgStyle } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import Text from "../atoms/Text";

interface TechItem {
  id: string; 
  name: string;
  category: string;
  icon: React.ComponentType; 
}

const TechStack: React.FC = () => {
  const { isDarkTheme } = useTheme(); 
  const [loading, setLoading] = useState(false);
  const [techStack, setTechStack] = useState<TechItem[]>([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const newTechItems: TechItem[] = [
      {
        id: `item-${techStack.length + 1}`,
        name: `React ${techStack}`,
        category: "Frameworks",
        icon: FaReact,
      },
      {
        id: `item-${techStack.length + 2}`,
        name: `TypeScript ${techStack}`,
        category: "Programming Languages",
        icon: CodeOutlined,
      },
      {
        id: `item-${techStack.length + 3}`,
        name: `Tailwind CSS & UNO CSS ${techStack}`,
        category: "Style",
        icon: CgStyle,
      },
      {
        id: `item-${techStack.length + 4}`,
        name: `Ant Design & React Icon ${techStack}`,
        category: "Libraries",
        icon: IoLibraryOutline,
      },
    ];
    setTechStack([...techStack, ...newTechItems]);
    setLoading(false);
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <DefaultLayout>
      <section
        className={`flex-1 w-full`}
      >
        <div className="p-10">
          <Text
            variant="h1"
            color={isDarkTheme ? "text-orange-500" : "text-yellow-500"}
          >
            My Tech Stack
          </Text>
          <Text
            variant="p"
            color={isDarkTheme ? "text-white" : "text-black"}
            className="mt-4 text-lg md:text-xl"
          >
            These are the technologies I used to build my Developer Portfolio Blog, showcasing my expertise in modern web development.
          </Text>
          <div
            id="scrollableDiv"
            className={`mt-6 overflow-auto ${
              isDarkTheme ? "border-gray-800" : "border-gray-200"
            }`}
            style={{ height: 600 }}
          >
            <List
              dataSource={techStack}
              renderItem={(item) => {
                const IconComponent = item.icon;
                return (
                  <List.Item key={item.id}>
                    <Card
                      className={`w-full font-mono ${
                        isDarkTheme
                          ? "bg-gray-800 text-white border-none"
                          : "bg-gray-200 text-gray-400 border-none"
                      } rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-${
                        isDarkTheme ? "gray-700" : "gray-400"
                      }`}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            icon={<IconComponent />}
                            className={
                              isDarkTheme ? "bg-blue-900" : "bg-blue-200"
                            }
                          />
                        }
                        title={
                          <Text
                            variant="h2"
                            color={`text-lg font-semibold ${
                              isDarkTheme ? "text-white" : "text-black"
                            }`}
                          >
                            {item.name}
                          </Text>
                        }
                        description={
                          <span className="text-gray-400">{item.category}</span>
                        }
                      />
                    </Card>
                  </List.Item>
                );
              }}
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default TechStack;