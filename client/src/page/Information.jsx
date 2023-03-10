import React, { useState } from "react";
import Navbar from "../components/nav/Navbar";
import NotificationCounter from "../components/menssages/NotificationCounter";
import BotonAbrirModal from "../components/Chat/BotonAbrirModal";

function Information() {
  return (
    <div>
      <Navbar />
      <div className=" w-auto pl-[220px] max-sm:pl-[2px] h-[100vh] bg-gray-700 text-center pt-[110px]">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white">
            <p id="p">
              <span className="span">Informacion sobre el producto</span>
            </p>
          </h1>

          <div className="flex pl-[45px]  pt-6 ">
            <div className="">
              <img
                src="https://exitocol.vtexassets.com/arquivos/ids/13631578/computador-pc-torre-gamer-power-l38-intel-core-i5-10400-ssd-480gb-ram-8gb-led-22-full-hd-nvidia-730-2gb.jpg?v=637935000011270000"
                alt=""
                className="w-[280px] border-orange-100 border-opacity-5 border-8 rounded-md"
              />
            </div>
            <div className="text-right  pt-8 md:pl-[60%] max-sm:pl-[10%] ">
              <h3>
                <p className="text-blue-400 font-extrabold text-md pb-[20px]  text-left">
                  Si de seas contactarse con el vendedor
                </p>
              </h3>
              <BotonAbrirModal texto="Comunicarse" />
            </div>
          </div>
          <h2 className="text-gray-800 text-left pl-14 pt-4 font-black">
            ComputadorR
          </h2>
          <div className="text-red-300 text-left pl-14 font-semibold">info</div>
          <p className="text-white pb-6 font-semibold order-2">
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
            Enim quo laboriosam, voluptatibus laborum alias culpa! Doloremque{" "}
          </p>
          <div className="bg-gray-400 w-auto  h-[40vh] items-center ml-[60px] mr-[20px]">
            <h1 className=" pt-44 font-extrabold text-gray-500 text-xl">
              no hay referencias
            </h1>
          </div>
        </div>
      </div>
      <NotificationCounter />
    </div>
  );
}

export default Information;
