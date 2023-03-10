import React, { useEffect, useState } from 'react';
import MiComponente from './MiComponente';
import io from "socket.io-client";

const socket = io("http://localhost:4000");// Se crea la conexión con el servidor de sockets
const BotonAbrirModal = ({ texto }) => {

  const [modalAbierto, setModalAbierto] = useState(false);
  const [identifier, setIdentifier]= useState(null);

  const abrirModal = () => {
    
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  useEffect(()=>{
    

   // Manejar la recepción de datos del servidor
   socket.on('identifier', (data) => {
    setIdentifier(data);
  });

  // Cerrar la conexión al desmontar el componente
  return () => {
    socket.close();
  }
}, []);

const handleClick = () => {
  setModalAbierto(true);
  // Emitir un evento al servidor para obtener el identificador deseado
  socket.emit('getIdentifier');
}

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
      >
        {texto}
      </button>
      {modalAbierto && <MiComponente onClose={cerrarModal} />}
    </div>
  );
};

export default BotonAbrirModal;
