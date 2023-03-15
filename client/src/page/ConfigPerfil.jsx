import React from "react";
import Configuracion from "../components/configuracion/Configuracion";
import NotificationCounter from "../components/menssages/NotificationCounter";
import Navbar from "../components/nav/Navbar";

function ConfigPerfil() {
  return (
    <div>
      <Navbar />
      <div  className=" w-auto pl-[258px] max-sm:pl-[2px] h-[100vh] bg-gray-700 text-center pt-[80px]">
        <Configuracion />
      </div>
      <NotificationCounter/>
    </div>
  );
}

export default ConfigPerfil;
