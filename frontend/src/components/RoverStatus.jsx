import React from 'react';

const RoverStatus = ({ rovers }) => { // aqui definimos o componente RoverStatus que recebe a prop rovers
  return (
    <div className="p-6 bg-transparent shadow-lg rounded-lg mb-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Status dos Rovers</h2>
      <ul className="list-disc pl-6">
        {rovers.map((rover, index) => (
          <li key={index} className="mb-2">
            Rover {index + 1}: Posição Final ({rover.x}, {rover.y}, {rover.direction})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoverStatus;
