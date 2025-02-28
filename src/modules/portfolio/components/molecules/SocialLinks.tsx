import React from 'react';
import Chat from '../atoms/chat';
import { FaFacebookF, FaLinkedin, FaGithub, FaTelegram} from 'react-icons/fa';
import { Button, Tooltip } from 'antd';

const SocialLinks: React.FC = () => {
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
        <Button 
          shape="circle" 
          icon={<FaLinkedin />} 
          className="!bg-gray-700 !text-white !border-none hover:!bg-gray-800"
        />
      </Tooltip>

      <Tooltip title="GitHub" color="blue">
        <Button 
          shape="circle" 
          icon={<FaGithub />} 
          className="!bg-gray-700 !text-white !border-none hover:!bg-gray-800"
        />
      </Tooltip>

      <Tooltip title="Telegram" color="blue">
        <Button 
          shape="circle" 
          icon={<FaTelegram />} 
          className="!bg-gray-700 !text-white !border-none hover:!bg-gray-800"
        />
      </Tooltip>

      <Chat className="absolute right-0 -top-7" />
    </div>
  );
};

export default SocialLinks;
