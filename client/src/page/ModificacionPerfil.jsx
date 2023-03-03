import React from "react";
import Profile from "../components/perfil/Profile";
import Navbar from "../components/nav/Navbar";
import MessengerButton from "../components/menssages/MessengerButton";

function ModificacionPerfil() {
  
  return (
    <div className="w-full h-[100vh] bg-gray-800 " >
      <Navbar />
      <div className="mt-[81px] max-sm:pl-2 pl-[256px] ">
        <Profile />
        <div>
          <MessengerButton/>
        </div>
      </div>
    </div>
    
  );
}

export default ModificacionPerfil;
