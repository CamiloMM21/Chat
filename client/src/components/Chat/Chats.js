import React, { useState, useEffect, useContext } from "react";
import Send from "./img/Send.png";
// para cominicarse con el bakend se importa io
import io from "socket.io-client";
import { AuthContext } from "../../context/AuthContext";
//esto nospermite enviar datos al bakend cliente bakend y el bakend al client
const socket = io("http://localhost:4000");

function Chats() {
  const userContext = useContext(AuthContext);
  const firstName = userContext.currentUser?.displayName?.split(" ")[0];
  const photoURL = userContext.currentUser?.photoURL;

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

  //

  return (
    <>
      <div
        id="container"
        className="w-[100%] max-w-[750px] bg-gradient-to-r from-gray-600 to-gray-500  m-auto border-2 border-purple-50 rounded-xl "
      >
        <div className="">
          <div className="grid  pt-3 w-24  text-left mr-[100%] grid-cols-2">
            <img
              src={photoURL}
              className="rounded-sm  pl-2 pb-2 cursor-pointer"
            />
            <span className="font-semibold text-lg text-gray-100 mr-[80%] pl-2 pt-2 cursor-pointe ">
              {firstName}
            </span>
          </div>
        </div>

        <div className="relative w-[100%] bg-slate-300 min-h-[550px] max-h-[500px] overflow-y-auto pt-[10px] pr-[30px] pl-[30px] pb-[20px] shadow-gray-500 ">
          <br />
          <div className="">
            {messages.map((message, index) => (
              <div
                key={index}
                className={` max-w-max max-sm:text-sm my-2 p-2 table text-sm max-w-max max-sm:text-sm pr-4 pl-4 pb-2  ${
                  message.from === "Me"
                    ? "mr-1  bg-blue-500 ml-auto rounded-l-full rounded-b-full font-semibold text-white "
                    : "bg-green-400 rounded-r-full rounded-b-full font-semibold text-black"
                }`}
              >
                <p>
                  {/* {message.from}:*/}
                  {message.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between max-h-[81px] w-[100%] pl-1 pr-1 mt-2">
          <textarea
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyDown={handleInputKeyDown}
            placeholder="Type something..."
            className="w-[590px]  text-[18px]
       h-12  w-full h-[32px]  mx-1 px-4  border rounded-lg mb-2  rounded-md h-8  pt-1 xl:w-[90%] max-sm:w-[70%]
      placeholder:max-sm:text-[11px] bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            style={{ resize: "none", overflow: "hidden" }}
          />

          <button
            className="bottom-none  pr-[14px] border-white mb-2 text-white cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 rounded-md h-8 shadow-md shadow-gray-700/50  max-sm:w-[100%]"
            onClick={handleSubmit}
          >
            <img className="ml-2    " src={Send} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Chats;
