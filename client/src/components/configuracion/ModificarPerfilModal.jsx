import React from "react";

function ModificarPerfilModal() {
  return (
    <div className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4 text-white">Modificar perfil</h2>
      <div className="flex items-center mb-4">
        <div className="mr-24">
          <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cambiar 
            </button> 
          <div className="mt-2">
           <img
            className="w-50 h-20 rounded-xl cursor-pointer"
            src="https://tierragamer.com/wp-content/uploads/2020/05/Hora-De-Aventura.jpg"
            alt="Avatar"
          />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="nombre-completo"
            >
              Nombre completo
            </label>
            <input
              className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="nombre-completo"
              type="text"
              placeholder="Nombre completo"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="nombre-usuario"
            >
              Nombre de usuario
            </label>
            <input
              className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="nombre-usuario"
              type="text"
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="telefono"
            >
              Teléfono
            </label>
            <input
              className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="telefono"
              type="tel"
              placeholder="Teléfono"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="correo"
            >
              Correo electrónico
            </label>
            <input
              className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="correo"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="ciudad"
            >
              Ciudad
            </label>
            <input
              className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="ciudad"
              type="text"
              placeholder="Ciudad"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Guardar cambios
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ModificarPerfilModal;
