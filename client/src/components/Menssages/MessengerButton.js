import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

function MessengerButton() {
  const [showMessenger, setShowMessenger] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleClick = () => {
    setShowMessenger(!showMessenger);
  };

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <button
        className="fixed bottom-10 right-10 p-2 bg-red-700 text-white rounded-full shadow-lg focus:outline-none"
        onClick={handleClick}
      >
        <HiOutlineMail />
      </button>
      {showMessenger && (
        <div className="fixed bottom-20 right-10 w-64 h-96 bg-white border border-gray-200 shadow-lg">
          <div className="p-4 border-b border-gray-200 font-medium text-lg bg-blue-600 text-white">
            Messages
          </div>
          <div className="p-4 text-gray-500">
            {messages.length === 0 ? (
              <div>You have no messages yet.</div>
            ) : (
              <ul>
                {messages.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="p-4 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const message = e.target.elements.message.value;
                handleNewMessage(message);
                e.target.reset();
              }}
            >
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessengerButton;
