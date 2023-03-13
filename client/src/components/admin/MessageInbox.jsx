import React from "react";
import Message from "./Message";

const MessageInbox = () => {
  const messages = [
    {
      id: 1,
      title: "Mensaje 1",
      description: "Descripción del mensaje 1.",
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 2,
      title: "Mensaje 2",
      description: "Descripción del mensaje 2.",
      image: "https://picsum.photos/id/238/200/300",
    },
    {
      id: 3,
      title: "Mensaje 3",
      description: "Descripción del mensaje 3.",
      image: "https://picsum.photos/id/239/200/300",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-white text-3xl font-bold my-8">Buzón de mensajes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {messages.map((message) => (
          <Message
            key={message.id}
            title={message.title}
            description={message.description}
            image={message.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageInbox;
