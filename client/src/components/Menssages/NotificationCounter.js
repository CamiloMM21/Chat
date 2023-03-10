import React, { useState,useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import io from 'socket.io-client';

function NotificationCounter() {
  const [showMessenger, setShowMessenger] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3001'); // URL del servidor de sockets

    socket.off('mensages', (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const handleClick = ({ soket }) => {
    setShowMessenger(!showMessenger);
  };

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <button className="bun" onClick={handleClick}>
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
                {messages.map((menssages, index) => (
                  <div key={index}>{messages}</div>
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
            ></form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationCounter;
