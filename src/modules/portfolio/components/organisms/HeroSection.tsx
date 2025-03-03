import Image from "../atoms/Image";
import Text from "../atoms/Text";
import CallToAction from "../molecules/CallToAction";
import { useTheme } from "../../../../shared/hooks/ThemeContext";
import visal from "../../../../assets/visal1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const HeroSection = () => {
  const { isDarkTheme } = useTheme();

  return (
    <section
      className={`flex font-mono flex-col md:flex-row justify-center items-center gap-6 p-4 md:p-10 `}
    >
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center space-y-4 md:items-start md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text variant="h1" color="text-red-500">Hi, I'm Visal</Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Text
            variant="p"
            color={`${isDarkTheme ? "text-white font-bold" : "text-black font-bold"}`}
          >
            Front-end Developer
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CallToAction />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full md:w-1/3 flex justify-center relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src={visal}
          alt="Visal torn"
          className="w-full max-w-xs md:max-w-md rounded-lg shadow-md object-cover"
        />
        <motion.div
          className={`absolute inset-0 bg-${isDarkTheme ? "black/30" : "white/30"} rounded-lg flex items-center justify-center text-${isDarkTheme ? "white" : "black"} opacity-0 hover:opacity-100 transition-opacity duration-300`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/about-me"
            className="text-lg font-semibold hover:opacity-90 transition-opacity"
            aria-label="View my profile"
          >
            View Profile
          </Link>
        </motion.div>
      </motion.div>

      <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Text
            variant="p"
            color="text-orange-500 text-3xl font-bold md:text-2xl"
          >
            Expert on
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Text
            variant="p"
            color={`${isDarkTheme ? "text-white font-bold" : "text-black font-bold"}`}
          >
            Based in Cambodia
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Text
            variant="p"
            color={`${isDarkTheme ? "text-white" : "text-black"}`}
          >
            I'm a front-end developer
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Text
            variant="p"
            color={`${isDarkTheme ? "text-white" : "text-black"}`}
          >
            Need a developer to bring your ideas to life and grow your business?{' '}
            <Link
              to="/contact"
              className={`${isDarkTheme ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"} underline transition-colors duration-300`}
              aria-label="Contact me"
            >
              Let's work together!
            </Link>
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <a
            href="/resume.pdf" 
            download="resume.pdf" 
            className={`inline-block ${
              isDarkTheme
                ? "!bg-red-500 text-white hover:!bg-red-600"
                : "!bg-red-500 text-white hover:!bg-red-600"
            } px-4 py-2 rounded-md font-semibold transition-colors duration-300`}
            aria-label="Download CV"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;