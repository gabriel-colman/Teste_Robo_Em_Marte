import React, { useState } from 'react';

const PlateauConfig = ({ setPlateauSize }) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio de formulário
    setPlateauSize({ width, height });
  };

  return (
    <div className="p-6 bg-transparent shadow-lg rounded-lg mb-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Configurar Platô</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-white">Largura:</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="border border-white rounded px-2 py-1 w-full bg-transparent text-white"
            min="0"
            placeholder="Largura"
          />
        </div>
        <div>
          <label className="block text-white">Altura:</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border border-white rounded px-2 py-1 w-full bg-transparent text-white"
            min="0"
            placeholder="Altura"
          />
        </div>
        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Definir Platô
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlateauConfig;
