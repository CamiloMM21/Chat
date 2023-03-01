import React, { useState } from 'react';
import MiComponente from './MiComponente';

const BotonAbrirModal = ({ texto }) => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <div>
      <button
        onClick={abrirModal}
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
      >
        {texto}
      </button>
      {modalAbierto && <MiComponente onClose={cerrarModal} />}
    </div>
  );
};

export default BotonAbrirModal;
