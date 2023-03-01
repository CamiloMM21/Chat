import React, { useState, useEffect } from "react";
import Send from "./img/Send.png";
import emoji from "./img/emoji.png";
import Attach from "./img/attach.png";
// para cominicarse con el bakend se importa io
import io from "socket.io-client";

//esto nospermite enviar datos al bakend cliente bakend y el bakend al client
const socket = io("http://localhost:4000");

function Chats() {
  //se creo un useState que por defecto va tener un string bacio esto me va permitir el cambio de estado del mensage
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  //se creo una variable llamada handleSubmit para cuando de sumbit me ejecute algo
  const handleSubmit = (e) => {
    //para que no refresque la pagina
    e.preventDefault();
    // send a message to the server, el emit me sirve para emitir un evento
    socket.emit("message", message);

    // los valores de los nuevos mensajes
    const newMessage = {
      body: message,
      from: "Me",
    };
  
    setMessages([...messages, newMessage]);
    // para establecer el mensage en bacio  y se pueda reflejar en el input
    setMessage("");
  };

  //useEffect nos permite ejecutar codigo cuando cargue la aplicacion
  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([...messages, message]);
    };
    // recceive a message from the server
    socket.on("message", receiveMessage);

    // se vulve a subscribirlo
    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("Se presionó Enter");
      handleSubmit();
    }
  };

  return (
    <>
      <div className="w-[100%] max-w-[750px] bg-blue-600 m-auto border-2 border-gray-700 rounded-xl ">
        <div className="">
          <div className="grid  pt-3 w-24  text-left mr-[100%] grid-cols-2">
            <img src="https://i.pinimg.com/236x/41/6e/65/416e6551b055039154711f332db48d98.jpg" 
            className="rounded-sm  pl-2 pb-2 cursor-pointer"/>
            <span className="font-semibold text-lg text-gray-200 mr-[80%] pl-2 pt-2 cursor-pointe ">
              Matias
            </span>
          </div>
        </div>

        <div className="relative w-[100%] bg-orange-100 min-h-[550px] max-h-[500px] overflow-y-auto pt-[10px] pr-[30px] pl-[30px] pb-[20px] shadow-gray-500 ">
          <br />
          <div className="">
            {messages.map((message, index) => (
              <div
                key={index}
                className={` max-w-max max-sm:text-sm my-2 p-2 table text-sm max-w-max max-sm:text-sm pr-4 pl-4 pb-2  ${
                  message.from === "Me"
                    ? "mr-1  bg-gray-500 ml-auto rounded-l-full rounded-b-full font-semibold text-white "
                    : "bg-green-400 rounded-r-full rounded-b-full font-semibold text-black" 
                }`}
              >
                <p>
                  {/* {message.from}:*/}{message.body} 
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between max-h-[81px] w-[100%] pl-1 pr-1 mt-2">
          <button className="bottom-none  pr-[8px] border-white mb-2 text-white bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-md h-8  shadow-md shadow-gray-700/50 max-sm:w-[80%] ">
            <img src={Attach} alt="" className="h-[24px] cursor-pointer ml-1" />
          </button>

          <textarea
            type="text"
            onChange={(e) => setMessage(e.target.value)
           }
          
            value={message}
            onKeyDown={handleInputKeyDown}
            placeholder="Type something..."
            className="w-[580px] border-none  text-black text-[18px]
      placeholder:italic h-12 placeholder:text-slate-400 w-full h-[32px] px-4 py-2 mx-1 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline-gray hover:border-gray-500 mb-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-md h-8  shadow-md shadow-gray-700/50 pt-1 xl:w-[90%] max-sm:w-[70%]
      placeholder:max-sm:text-[11px]"
            style={{ resize: "none", overflow: "hidden" }}
          />

          <button className="bottom-none  pr-[12px] border-white mb-2 text-white bg-yellow-400 cursor-pointer hover:bg-yellow-500 rounded-md h-8  shadow-md shadow-gray-700/50 mr-1">
            <img className="flex h-4 w-4 ml-2 " src={emoji} />
          </button>

          <button
            className="bottom-none  pr-[14px] border-white mb-2 text-white bg-red-600 cursor-pointer hover:bg-red-700 rounded-md h-8  shadow-md shadow-gray-700/50  max-sm:w-[100%]"
            onClick={handleSubmit}
          >
            <img className="ml-1 pl-1    " src={Send} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Chats;
