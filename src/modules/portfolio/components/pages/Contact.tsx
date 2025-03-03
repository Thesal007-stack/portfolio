import DefaultLayout from "../templates/DefaultLayout";
import Card from "../atoms/Card"; // Assuming you have or will create a Card atom
import Text from "../atoms/Text";
import { Input, Form } from "antd";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; 
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import CustomButton from "../atoms/custom-button";
import { SendOutlined } from "@ant-design/icons";
import { motion } from "framer-motion"; 
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; 
import "leaflet/dist/leaflet.css"; 
import L from "leaflet"; 
declare module "leaflet" {
    interface Icon {
      _getIconUrl(name: string): string;
    }
  }
  
// Fix Leaflet's default marker icon issue in React
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


const Contact: React.FC = () => {
  const { isDarkTheme } = useTheme(); 
  const [form] = Form.useForm();

  const onFinish = () => {
    form.resetFields(); 
  };

  const emailAddress = "visaltorn38@gmail.com"; 

  // Phnom Penh coordinates

  return (
    <DefaultLayout>
      <section
        className={`flex-1 w-full ${
          isDarkTheme ? "bg-black text-white" : "bg-white text-black"
        }`}
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
                    Send <span><SendOutlined /></span>
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
              <div className="space-y-6">
                {/* Contact Information with Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <FaEnvelope className={isDarkTheme ? "text-gray-400" : "text-gray-600"} />
                  <a
                    href={`mailto:${emailAddress}`}
                    className={isDarkTheme ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}
                  >
                    <Text variant="p">{emailAddress}</Text>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <FaPhone className={isDarkTheme ? "text-gray-400" : "text-gray-600"} />
                  <Text variant="p" color={isDarkTheme ? "text-white" : "text-black"}>
                    +855 96 610 4402
                  </Text>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <FaMapMarkerAlt className={isDarkTheme ? "text-gray-400" : "text-gray-600"} />
                  <Text variant="p" color={isDarkTheme ? "text-white" : "text-black"}>
                    Phnom Penh, Cambodia
                  </Text>
                </motion.div>

                {/* Interactive Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-6 rounded-lg overflow-hidden"
                >
                  <MapContainer
                    center={[11.5621, 104.9160]} // Phnom Penh coordinates
                    zoom={13}
                    className="w-full h-64 rounded-lg"
                    style={{ backgroundColor: isDarkTheme ? "#374151" : "#e5e7eb" }} // Custom background for dark/light mode
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[11.5621, 104.9160]}>
                      <Popup>
                        <Text variant="p" color={isDarkTheme ? "text-white" : "text-black"}>
                          Phnom Penh, Cambodia
                        </Text>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </motion.div>

                {/* Interactive Call-to-Action Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-6"
                >
                  <CustomButton
                    variant="primary"
                    className="w-full md:w-auto px-6 py-3 rounded-md font-semibold transition-colors duration-300"
                    onClick={() => window.location.href = `/contact`}
                  >
                    Reach Out Now <span>→</span>
                  </CustomButton>
                </motion.div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Contact;