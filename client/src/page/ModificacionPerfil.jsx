import React from "react";
import Profile from "../components/Perfil/Profile";
import Menu from "../components/Menu";
import MessengerButton from "../components/Menssages/MessengerButton";

function ModificacionPerfil() {
  
  return (
    <div className="w-[100%] h-[100vh] bg-black" >
      <Menu />
      <div className="pt-10">
        <Profile />
        <div>
          <MessengerButton/>
        </div>
      </div>
    </div>
    
  );
}

export default ModificacionPerfil;
