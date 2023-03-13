import React, { useState } from "react";
import ModificarPerfilModal from "./ModificarPerfilModal";
import EliminarCuentaModal from "./EliminarCuentaModal";

function Configuracion() {
  const [activeButton, setActiveButton] = useState("modificarPerfil");

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex flex-row h-screen bg-gray-600">
      <div className="flex flex-col w-64 bg-gray-400 border-r">
        <button
          onClick={() => handleClick("modificarPerfil")}
          className={`p-4 text-left font-bold ${
            activeButton === "modificarPerfil" ? "bg-red-600" : "bg-red-300 "
          }`}
        >
          Modificar perfil
        </button>
        
        <button
          onClick={() => handleClick("eliminarCuenta")}
          className={`p-4  text-left font-bold ${
            activeButton === "eliminarCuenta" ? "bg-red-600" : "bg-red-300"
          }`}
        >
          Eliminar cuenta
        </button>
      </div>
      <div className="flex-1 p-8">
        {activeButton === "modificarPerfil" ? (
          <ModificarPerfilModal />
        ) : (
          <EliminarCuentaModal />
        )}
      </div>
    </div>
  );
}

export default Configuracion;
