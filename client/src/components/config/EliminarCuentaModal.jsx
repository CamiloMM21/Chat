function EliminarCuentaModal() {
    return (
      <div className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4 text-white">Eliminar cuenta</h2>
        <p className="mb-4 font-bold">
          ¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede
          deshacer.
        </p>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Eliminar cuenta
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }
  
  export default EliminarCuentaModal;