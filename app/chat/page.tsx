"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface Message {
  text: string;
  sender: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

  useEffect(() => {
    // Simulate initial chat messages
    setMessages([
      { text: "Hello! Welcome to our chat.", sender: "AI" },
      {
        text: "Feel free to start a conversation.",
        sender: "AI",
      },
    ]);
  }, []);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Simulate AI response
    const aiResponse = generateAIResponse(inputText);

    setMessages([...messages, { text: inputText, sender: "user" }]);
    setMessages([...messages, { text: aiResponse, sender: "AI" }]);
    setInputText("");
    setShowPlaceholder(false);
  };

  const generateAIResponse = (userMessage: string): string => {
    // This is where you would call the ConvoGenius API or your own AI model
    // For now, let's just echo back the user's message
    return "AI: " + userMessage;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left panel for recent chats */}
      <div className="w-1/4 bg-gray-200 overflow-y-auto p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Chats</h2>
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="font-semibold">
              {message.sender === "user" ? "You: " : "AI: "}
            </span>
            {message.text}
          </div>
        ))}
      </div>
      {/* Chat area */}
      <div className="flex-1 flex flex-col justify-between bg-gray-100">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === "user"
                  ? "flex justify-end mb-4"
                  : "flex justify-start mb-4"
              }
            >
              <div
                className={
                  message.sender === "user"
                    ? "bg-blue-500 text-white p-3 rounded-lg max-w-md"
                    : "bg-gray-200 text-gray-800 p-3 rounded-lg max-w-md"
                }
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setShowPlaceholder(e.target.value === "");
            }}
            className="border border-gray-300 rounded-l-full py-2 px-4 bg-white w-full"
            placeholder={showPlaceholder ? "Type your message here..." : ""}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-full transition duration-300"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
