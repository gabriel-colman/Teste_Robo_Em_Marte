import React from 'react';

// A lista de comandos dos rovers é exibida em uma lista não ordenada
const CommandList = ({ rovers }) => {  // Recebe a lista de rovers como propriedade
  return (
    <div className="p-6 bg-transparent shadow-lg rounded-lg mb-4">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Comandos dos Rovers</h2>
      <ul className="list-disc pl-6 text-white">
        {rovers.map((rover, index) => (
          <li key={index} className="mb-2">
            Rover {index + 1}: Posição inicial ({rover.x}, {rover.y}, {rover.direction}), Comandos: {rover.commands}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommandList;
