"use client";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

interface Message {
  text: string;
  sender: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  const chatAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Simulate initial chat messages with animation
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    tl.fromTo(
      chatAreaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, ease: "power3.out" }
    ).fromTo(
      inputRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, ease: "power3.out" },
      "-=0.3"
    );

    setMessages([
      { text: "Welcome to our chat!", sender: "title" },
      {
        text: "Feel free to start a conversation.",
        sender: "description",
      },
    ]);
  }, []);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Simulate AI response
    const aiResponse = generateAIResponse(inputText);

    setMessages([
      ...messages,
      { text: `You: ${inputText}`, sender: "user" },
      { text: aiResponse, sender: "AI" },
    ]);

    // Animate sending message
    const messageIndex = messages.length;
    gsap.fromTo(
      `#message-${messageIndex}`,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5 }
    );

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
        {messages.map((message, index) =>
          message.sender === "AI" ? null : (
            <div
              key={index}
              className={`mb-2 ${
                index === 1 ? "border-b border-black/[0.1] mb-2 pb-2" : ""
              }`}
            >
              <span className="font-semibold">
                {message.sender === "user" ? "" : ""}
              </span>
              {message.text}
            </div>
          )
        )}
      </div>
      {/* Chat area */}
      <div
        className="flex-1 flex flex-col justify-between bg-gray-100"
        ref={chatAreaRef}
      >
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              id={`message-${index}`}
              className={
                message.sender === "user" || message.sender === "AI"
                  ? "mb-4 ml-4"
                  : message.sender === "title" ||
                    message.sender === "description"
                  ? "text-3xl font-bold text-center mb-4"
                  : "text-lg text-center text-gray-600 mb-4"
              }
            >
              {message.text}
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
            ref={inputRef}
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
