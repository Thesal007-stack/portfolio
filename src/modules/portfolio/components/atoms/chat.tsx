import { useState, useRef, useEffect } from "react";
import { Modal, Input, Button } from "antd";
import { BiChat, BiSend } from "react-icons/bi";
import CustomButton from "./custom-button";
import { useTheme } from "../../../../shared/hooks/ThemeContext";

type Props = {
  className?: string;
};

const Chat: React.FC<Props> = ({ className }) => {
  const { isDarkTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  // Open & close modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Send message
  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <>
      {/* Chat Button */}
      <CustomButton
        onClick={openModal}
        className={`${isDarkTheme ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-black hover:bg-gray-300 shadow-gray-500"} ${className}`}
      >
        <BiChat />
      </CustomButton>

      {/* Chat Modal */}
      <Modal
        title="Live Chat"
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        className={`${isDarkTheme ? "dark" : ""}`}
      >
        <div className={`flex flex-col h-80 ${isDarkTheme ? "bg-gray-900 text-white" : "bg-white"}`}>
          {/* Chat Messages */}
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto p-3 space-y-2 border-b border-gray-300"
          >
            {messages.length === 0 ? (
              <p className="text-gray-500 text-center">No messages yet. Start the conversation!</p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-xs ${
                    index % 2 === 0
                      ? "bg-blue-500 text-white self-start"
                      : "bg-gray-300 text-black self-end"
                  }`}
                >
                  {msg}
                </div>
              ))
            )}
          </div>

          {/* Chat Input */}
          <div className="p-3 flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
              onPressEnter={sendMessage}
            />
            <Button type="primary" icon={<BiSend />} onClick={sendMessage} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Chat;
