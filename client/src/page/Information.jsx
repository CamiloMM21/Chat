import React, { useState } from "react";
import Navbar from "../components/nav/Navbar";
import MessengerButton from "../components/menssages/MessengerButton";
import BotonAbrirModal from "../components/Chat/BotonAbrirModal";

function Information() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleButtonClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const bodyStyles = {
    backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.5)" : "transparent",
    opacity: isDarkMode ? "o.5" : "1",
    transition: "background-color 0.3s ease-in-out, opacity 0.3s ease-in-out",
  };

  return (
    <div style={bodyStyles}>
      <Navbar />
      <div className=" w-auto pl-[220px] h-[100vh] bg-gray-700 text-center pt-[100px]">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white">
            Informacion sobre el producto
          </h1>

          <div className="flex pl-[45px] ">
           <div className="">
            <img
              src="https://exitocol.vtexassets.com/arquivos/ids/13631578/computador-pc-torre-gamer-power-l38-intel-core-i5-10400-ssd-480gb-ram-8gb-led-22-full-hd-nvidia-730-2gb.jpg?v=637935000011270000"
              alt=""
              className="w-[280px] border-orange-400 border-8 "
            />
            </div>
            <div className="text-right  pt-8 md:pl-[60%] max-sm:pl-[10%] ">
              <h3>
                <p className="text-blue-600 font-bold text-sm mb-2 ">
                  Si de seas contactarse <br />
                  con el vendedor{" "}
                </p>
              </h3>
              <BotonAbrirModal
                onClick={handleButtonClick}
                texto="Comunicarse"
              /> 
              
            </div>
          </div>
          <h2 className="text-white text-left pl-14 font-extrabold">ComputadorR</h2>
          <div className="text-white text-left pl-14 font-semibold">info</div>
          <p className="text-white pb-6 font-semibold">
            Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit. Enim quo
            laboriosam, voluptatibus laborum alias culpa! Doloremque{" "}
          </p><div className="bg-gray-400 w-auto  h-[40vh] items-center ml-[60px] mr-[20px]">

            <h1 className=" pt-44 font-extrabold text-gray-500 text-xl">no hay referencias</h1>

        </div>
        
        </div>
        
      </div>
      <MessengerButton />
    </div>
  );
}

export default Information;
