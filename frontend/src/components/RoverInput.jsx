import React, { useState, useContext } from 'react';
import compassImage from '../assets/busula.jpg'; // Imagem da bússola
import { RoverContext } from '../context/RoverContext';

// O componente RoverInput é responsável por adicionar um novo rover
const RoverInput = ({ addRover }) => { // Define o componente RoverInput
  const [x, setX] = useState(0); // Define o estado x com o valor inicial 0
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState('N');
  const [commands, setCommands] = useState('');

  const [commandInput, setCommandInput] = useState('');
  const { sendRoverCommands } = useContext(RoverContext);


  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio de formulário
    if (commands.match(/^[LRM]+$/i)) { // Verifica se os comandos são válidos
      addRover({ x, y, direction, commands });
      alert('Rover adicionado com sucesso!');
      setX(0);
      setY(0);
      setDirection('N');
      setCommands('');

      sendRoverCommands(commandInput);  // Envia os comandos para o backend
      setCommandInput('');  // Limpa o campo de entrada
    } else {
      alert('Comandos inválidos! Use apenas L, R ou M.');
    }
  };



  // Retorna o formulário para adicionar um novo rover
  return (
    <div className="p-6 bg-transparent shadow-lg rounded-lg mb-4 max-w-3xl mx-auto"> 
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Adicionar Rover</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-white">X:</label>
          <input 
            type="number" 
            value={x} 
            onChange={(e) => setX(e.target.value)} 
            className="border border-white rounded px-2 py-1 w-full bg-transparent text-white"
            min="0"
            placeholder="Coordenada X"
          />
        </div>
        <div>
          <label className="block text-white">Y:</label>
          <input 
            type="text"
            value={commandInput}
            // type="number" 
            // value={y} 
            onChange={(e) => setY(e.target.value)} 
            className="border border-white rounded px-2 py-1 w-full bg-transparent text-white"
            min="0"
            placeholder="Coordenada Y"
          />
        </div>
        <div className="flex items-center">
          <label className="block text-white mr-2">Direção:</label>
          <select 
            value={direction} 
            onChange={(e) => setDirection(e.target.value)} 
            className="border border-white rounded px-2 py-1 bg-transparent text-white"
          >
            
            <option value="N"style={{ backgroundColor: '#000', color: '#fff' }}>N</option>
            <option value="E"style={{ backgroundColor: '#000', color: '#fff' }}>E</option>
            <option value="S"style={{ backgroundColor: '#000', color: '#fff' }}>S</option>
            <option value="W"style={{ backgroundColor: '#000', color: '#fff' }}>W</option>
          </select>
          <img src={compassImage} alt="Pontos Cardeais" className="ml-4 w-16 h-16" />
        </div>
        <div className="col-span-3">
          <label className="block text-white">Comandos:</label>
          <input 
            type="text" 
            value={commands} 
            onChange={(e) => setCommands(e.target.value)} 
            className="border border-white rounded px-2 py-1 w-full bg-transparent text-white"
            placeholder="Ex: LMLMLMLMM"
          />
        </div>
        <div className="col-span-3 text-center">
          <button 
            type="submit" 
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Adicionar Rover
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoverInput;
