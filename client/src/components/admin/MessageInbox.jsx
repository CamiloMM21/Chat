import React from "react";
import Message from "./Message";

const MessageInbox = () => {
  const messages = [
    {
      id: 1,
      title: "Mensaje 1",
      description: "Descripción del mensaje 1.",
      image: "https://st.depositphotos.com/1164721/1873/i/600/depositphotos_18737335-stock-photo-business-man-with-laptopmobile-phonetouch.jpg",
    },
    {
      id: 2,
      title: "Mensaje 2",
      description: "Descripción del mensaje 2.",
      image: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-business-people-data-analysis-image_2241147.jpg",
    },
    {
      id: 3,
      title: "Mensaje 3",
      description: "Descripción del mensaje 3.",
      image: "https://us.123rf.com/450wm/ostapenko/ostapenko1908/ostapenko190800130/129609619-concepto-de-negocio-web-isom%C3%A9trico-de-administraci%C3%B3n-financiera-contabilidad-an%C3%A1lisis-auditor%C3%ADa.jpg?ver=6",
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
