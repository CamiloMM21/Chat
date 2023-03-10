import React from "react";
import Profile from "../components/perfil/Profile";
import Navbar from "../components/nav/Navbar";
import NotificationCounter from "../components/menssages/NotificationCounter";

function ModificacionPerfil() {
  
  return (
    <div className="w-full h-[100vh] bg-gray-800 " >
      <Navbar />
      <div className="mt-[81px] max-sm:pl-2 pl-[256px] ">
        <Profile />
        <div>
          <NotificationCounter/>
        </div>
      </div>
    </div>
    
  );
}

export default ModificacionPerfil;
