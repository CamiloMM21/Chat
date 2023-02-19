import React, { useState, useEffect } from "react";
import Send from "./img/Send.png";
import emoji from "./img/emoji.png";
import Attach from "./img/attach.png";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function Input() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);

    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages([...messages, newMessage]);
    setMessage("");
  };

  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([...messages, message]);
    };
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  return (
    <>
      <div className="bg-gray-200 p-[10px] h-[82%] overflow-y-auto ">
        <label className="font-serif pl-56  max-sm:text-sm max-sm:pl-1 xl:pl-[40%]">
          {" "}
          ¡Bienvenido a tu Conversacion!
        </label>
        <br />
        <br />
        {messages.map((message, index) => (
          <div key={index}>
            <p>
              {message.body}: {message.from}
            </p>
          </div>
        ))}
      </div>
      <div className="flex h-[50px] bg-white p-[1px] items-center justify-between max-sm:w-[80%] xl:w-[100%] mb-[230px] ">
        <button className="bottom-none  pr-[12px] border-white mb-2 text-white bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-md h-8  shadow-md shadow-gray-700/50">
          <img className="flex h-4 w-4 ml-2" src={emoji} />
        </button>
        <textarea
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Type something..."
          className="w-[580px] border-none  text-black text-[18px]
      placeholder:italic h-12 placeholder:text-slate-400 w-full h-[32px] px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline-gray hover:border-gray-500 mb-2 bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-md h-8  shadow-md shadow-gray-700/50 pt-1 xl:w-[90%] max-sm:w-[70%]
      placeholder:max-sm:text-[11px]"
          style={{ resize: "none", overflow: "hidden" }}
        />

        <div className="flex items-center gap-[10px]">
          <button className="bottom-none ml-[2px] pr-[8px] border-white mb-2 text-white bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-md h-8  shadow-md shadow-gray-700/50 max-sm:w-[80%]">
            <img src={Attach} alt="" className="h-[24px] cursor-pointer ml-1" />
          </button>

          <button
            className="bottom-none  pr-[14px] border-white mb-2 text-white bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-md h-8  shadow-md shadow-gray-700/50  max-sm:w-[100%]"
            onClick={handleSubmit}
          >
            <img className="ml-1  " src={Send} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;
