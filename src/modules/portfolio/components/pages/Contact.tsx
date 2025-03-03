import DefaultLayout from "../templates/DefaultLayout";
import Card from "../atoms/Card"; 
import Text from "../atoms/Text";
import { Input, Form } from "antd";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa"; // Icons for contact info and socials
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import CustomButton from "../atoms/custom-button";
import { SendOutlined } from "@ant-design/icons";

const Contact: React.FC = () => {
  const { isDarkTheme } = useTheme(); 
  const [form] = Form.useForm();

  const onFinish = () => {
    form.resetFields(); 
  };

  const emailAddress = "visaltorn38@gmail.com"; 

  return (
    <DefaultLayout>
      <section
        className={`flex-1 w-full`}
      >
        <div className="p-4 md:p-6 lg:p-10">
          <Text
            variant="h1"
            color={isDarkTheme ? "text-orange-500" : "text-yellow-500"}
          >
            Contact Me
          </Text>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              className={`p-6 rounded-lg shadow-md ${
                isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
              }`}
            >
              <Text
                variant="h2"
                color={isDarkTheme ? "text-white" : "text-black"}
                className="mb-4"
              >
                Send Me a Message
              </Text>
              <Form
                form={form}
                name="contact"
                onFinish={onFinish}
                layout="vertical"
                className="space-y-4"
              >
                <Form.Item
                  name="name"
                  label={<Text color={isDarkTheme ? "text-white" : "text-black"}>Name</Text>}
                  rules={[{ required: true, message: "Please enter your name" }]}
                >
                  <Input
                    size="large"
                    className={isDarkTheme ? "!bg-gray-700 !text-white !border-gray-600" : "!bg-gray-100 !text-black !border-gray-300"}
                    placeholder="Your Name"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  label={<Text color={isDarkTheme ? "text-white" : "text-black"}>Email</Text>}
                  rules={[{ required: true, message: "Please enter your email", type: "email" }]}
                >
                  <Input
                    size="large"
                    className={isDarkTheme ? "!bg-gray-700 !text-white !border-gray-600" : "!bg-gray-100 !text-black !border-gray-300"}
                    placeholder="your@email.com"
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  label={<Text color={isDarkTheme ? "text-white" : "text-black"}>Message</Text>}
                  rules={[{ required: true, message: "Please enter your message" }]}
                >
                  <Input.TextArea
                    size="large"
                    className={isDarkTheme ? "!bg-gray-700 !text-white !border-gray-600" : "!bg-gray-100 !text-black !border-gray-300"}
                    placeholder="Your message here..."
                    rows={4}
                  />
                </Form.Item>
                <Form.Item>
                  <CustomButton
                  className="w-24"
                  variant="primary"
                  >
                       Send <span><SendOutlined/></span>
                  </CustomButton>
                </Form.Item>
              </Form>
            </Card>

            <Card
              className={`p-6 rounded-lg shadow-md ${
                isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
              }`}
            >
              <Text
                variant="h2"
                color={isDarkTheme ? "text-white" : "text-black"}
                className="mb-4"
              >
                Get in Touch
              </Text>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-2">
                  <FaEnvelope className={isDarkTheme ? "text-gray-400" : "text-gray-600"} />
                  <a
                    href={`mailto:${emailAddress}`}
                    className={isDarkTheme ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}
                  >
                    <Text variant="p">{emailAddress}</Text>
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <FaPhone className={isDarkTheme ? "text-gray-400" : "text-gray-600"} />
                  <Text variant="p" color={isDarkTheme ? "text-white" : "text-black"}>
                    +855 96  610 4402
                  </Text>
                </div>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className={isDarkTheme ? "text-gray-400" : "text-gray-600"} />
                  <Text variant="p" color={isDarkTheme ? "text-white" : "text-black"}>
                    Phnom Penh, Cambodia
                  </Text>
                </div>

             
                <div className="mt-4">
                  <Text
                    variant="p"
                    color={isDarkTheme ? "text-white" : "text-black"}
                    className="mb-2"
                  >
                    Connect with me:
                  </Text>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/yourprofile" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isDarkTheme ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}
                    >
                      <FaFacebookF className="text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yourprofile" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isDarkTheme ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a
                      href="https://github.com/Thesal007-stack/portfolio" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isDarkTheme ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href="https://t.me/VisalDev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isDarkTheme ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}
                    >
                      <FaTelegram className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Contact;