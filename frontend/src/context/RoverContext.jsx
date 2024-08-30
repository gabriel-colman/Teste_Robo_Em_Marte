import React, { createContext, useState } from 'react';

export const RoverContext = createContext(); // aqui criamos o contexto RoverContext

// Este componente fornece o contexto para os componentes filhos
export const RoverProvider = ({ children }) => { // aqui definimos o componente RoverProvider que recebe children
  const [plateauSize, setPlateauSize] = useState({ width: 5, height: 5 });
  const [rovers, setRovers] = useState([]); // aqui definimos o estado rovers

  const addRover = (rover) => { // aqui definimos a função addRover
    setRovers([...rovers, rover]); // adiciona um rover ao estado rovers
  };

//   const addRover = (rover) => { // aqui definimos a função addRover
  return (
    <RoverContext.Provider value={{ plateauSize, setPlateauSize, rovers, addRover }}>
      {children}
    </RoverContext.Provider>
  );
};
