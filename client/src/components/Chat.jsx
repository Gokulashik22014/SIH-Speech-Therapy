import React, { useState, useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";
import io from "socket.io-client";



// Before starting we need to set up authentication and ensure that the chat is private so remember it and do it dont mess it up you 
// DAMN fool listern to me you need to fix this code 




const socket = io("http://localhost:3000"); // Adjust the URL to match your server

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, { text: msg, isSent: false }]);
    });

    // Clean up the effect
    return () => socket.off("chat message");
  }, []);

  const handleSendMessage = () => {
    if (text.trim()) {
      const newMessage = { text, isSent: true };
      socket.emit("chat message", text);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setText("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-base-200 h-[500px] flex flex-col justify-between items-center pb-2 w-full rounded-lg shadow-md">
      <div className="bg-base-100 w-full flex h-16 px-4 py-2 items-center border-b">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img alt="User avatar" src="./images/dp.jpg" />
          </div>
        </div>
        <h1 className="font-bold text-lg ml-3">Chat Room</h1>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 w-full overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`chat ${msg.isSent ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="User avatar" src={msg.isSent ? '/images/dp.jpg' : '/images/patient.png'} />
              </div>
            </div>
            <div className="chat-bubble">{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="flex items-center w-full px-4 py-3 bg-base-100 border-t">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
          className="input input-bordered flex-grow mr-3"
        />
        <button
          onClick={handleSendMessage}
          className="btn btn-primary btn-circle"
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;