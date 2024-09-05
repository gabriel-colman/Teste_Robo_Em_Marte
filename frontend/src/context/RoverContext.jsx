import React, { createContext, useState } from 'react';

export const RoverContext = createContext(); 

export const RoverProvider = ({ children }) => {
  const [roverStatus, setRoverStatus] = useState([]);

  // Função para enviar comandos para o backend
  const sendRoverCommands = async (commands) => {
    try {
      const response = await fetch('http://localhost:5000/api/rovers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ commands })
      });

      const data = await response.json();
      setRoverStatus(data);  // Atualiza o estado com a resposta do backend
    } catch (error) {
      console.error('Erro ao enviar comandos para o rover:', error);
    }
  };

  return (
    <RoverContext.Provider value={{ roverStatus, sendRoverCommands }}>
      {children}
    </RoverContext.Provider>
  );
};
