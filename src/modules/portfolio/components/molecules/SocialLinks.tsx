import React from "react";
import Chat from "../atoms/chat";
import { FaFacebookF, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { Button, Tooltip } from "antd";


const SocialLinks: React.FC = () => {
  const linkInLink = "https://www.linkedin.com/in/torn-visal-54481032a/";
  const githubLink = "https://github.com/Thesal007-stack/portfolio";
  const telegramLink = "https://t.me/Tornvisal"; 

  return (
    <div className="relative flex justify-center items-center space-x-4">
      <Tooltip title="Facebook" color="blue">
        <Button
          shape="circle"
          icon={<FaFacebookF />}
          className="!bg-gray-700 !text-white !border-none hover:!bg-gray-800"
        />
      </Tooltip>

      <Tooltip title="LinkedIn" color="blue">
        <a
          href={linkInLink}
          target="_blank"
          aria-label="Connect on LinkIn"
        >
        <Button
          shape="circle"
          icon={<FaLinkedin />}
          className="!bg-gray-700 !text-white !border-none hover:!bg-gray-800"
        />
        </a>
      </Tooltip>

      <Tooltip title="GitHub" color="blue">
        <a
          href={githubLink}
          target="_blank"
          aria-label="Connect on Github"
        >

        <Button
          shape="circle"
          icon={<FaGithub />}
          className="!bg-gray-700 !text-white !border-none hover:!bg-gray-800"
        />
        </a>
      </Tooltip>

      <Tooltip title="Telegram" color="blue">
        <a
          href={telegramLink}
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Connect on Telegram"
        >
          <Button
            shape="circle"
            icon={<FaTelegram />}
            className="!bg-gray-700 !text-white !border-none hover:!bg-gray-800"
          />
        </a>
      </Tooltip>

      <Chat className="absolute right-0 -top-7" />
    </div>
  );
};

export default SocialLinks;