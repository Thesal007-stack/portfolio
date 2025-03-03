import DefaultLayout from "../templates/DefaultLayout";
import Card from "../atoms/Card";
import { CodeOutlined, LinkOutlined } from "@ant-design/icons"; 
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import sabairok from '../../../../assets/sabairok.jpg'
import Text from "../atoms/Text";

const Projects: React.FC = () => {
  const { isDarkTheme } = useTheme(); 

  const projects = [
    {
      id: "proj-1",
      title: "Developer Portfolio",
      description:
        "A responsive portfolio built with React, TypeScript, and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/yourusername/developer-portfolio",
      liveUrl: "https://yourportfolio.com",
      image:
        "https://th.bing.com/th/id/OIP.VpYsJdLXSMr54R4foMQsHgAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: "proj-2",
      title: "Cam-formant",
      description:
        "Cam-Formant is a job search platform that helps users find new employment opportunities in Cambodia..",
      technologies: ["React","Next.js","Node.js","Expressjs","Tsoa","MongoDB", "AWS"],
      githubUrl: "https://github.com/yourusername/e-commerce",
      liveUrl: "https://ecommerce.yourdomain.com",
      image: sabairok,
    },
    {
      id: "proj-3",
      title: "Task Manager App",
      description: "A productivity tool built with React and Firebase.",
      technologies: ["React", "Firebase", "TypeScript"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://taskmanager.yourdomain.com",
      image:
        "https://th.bing.com/th/id/OIP.L63q1u9bbS-Opxqhsl6jAQAAAA?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <DefaultLayout>
      <section>
        <div className="p-4 md:p-6 lg:p-10">
          <Text
            variant="h1"
            className={isDarkTheme ? "text-orange-500" : "text-yellow-500"}
          >
            My Projects
          </Text>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`p-4 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-${
                  isDarkTheme ? "gray-700" : "gray-400"
                } ${
                  isDarkTheme
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <div className="flex flex-col gap-4">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  )}
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-sm rounded-md ${
                          isDarkTheme
                            ? "bg-blue-900 text-blue-300"
                            : "bg-blue-200 text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-3 py-2 rounded-md font-semibold transition-colors duration-300 ${
                          isDarkTheme
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-gray-300 text-black hover:bg-gray-400"
                        }`}
                      >
                        <CodeOutlined />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-3 py-2 rounded-md font-semibold transition-colors duration-300 ${
                          isDarkTheme
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-gray-300 text-black hover:bg-gray-400"
                        }`}
                      >
                        <LinkOutlined />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Projects;
