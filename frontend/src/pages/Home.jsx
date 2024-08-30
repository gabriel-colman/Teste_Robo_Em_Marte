import React, { useContext } from 'react';
import PlateauConfig from '../components/PlateauConfig';
import RoverInput from '../components/RoverInput';
import CommandList from '../components/CommandList';
import RoverStatus from '../components/RoverStatus';
import { RoverContext } from '../context/RoverContext';
import introBackground from '../assets/intro-background.png'; // Imagem de fundo para a introdução
import marsBackground from '../assets/mars-background.png'; // Imagem de fundo para o formulário
import Instructions from '../context/Instructions'; // Importe o componente Instructions

const Home = () => {
  const { plateauSize, setPlateauSize, rovers, addRover } = useContext(RoverContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-900 text-white">
      {/* Container da Introdução e Instruções */}
      <div 
        className="relative w-full h-auto flex flex-col items-center justify-center" 
        style={{ 
          backgroundImage: `url(${introBackground})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          padding: '2rem 1rem'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div> {/* Gradiente para o texto */}
        <div className="relative z-10 text-center text-white max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Exploração de Marte</h1>
          <p className="text-lg mb-4">
            Bem-vindo ao Simulador de Rovers em Marte. Sua missão é controlar os rovers exploradores para navegar pelo terreno marciano e enviar dados de volta para a Terra. Defina o tamanho do platô, adicione rovers e emita comandos para explorar o planeta vermelho. Utilize as teclas de comando para girar e mover os rovers e veja suas aventuras se desenrolarem na superfície marciana!
          </p>
        </div>
        
        {/* Instruções abaixo da Introdução */}
        <div className="relative z-10 mt-4 w-full max-w-lg bg-black bg-opacity-50 p-4 rounded-lg">
          <Instructions />
        </div>
      </div>

      {/* Seção do Formulário com Fundo de Marte */}
      <div 
        className="relative w-full flex justify-center bg-cover bg-center bg-no-repeat py-12" 
        style={{ backgroundImage: `url(${marsBackground})` }}
      >
        <div className="w-full max-w-3xl p-8 bg-black bg-opacity-70 rounded-lg shadow-lg">
          <PlateauConfig setPlateauSize={setPlateauSize} />
          <RoverInput addRover={addRover} />
          <CommandList rovers={rovers} />
          <RoverStatus rovers={rovers} />
        </div>
      </div>
    </div>
  );
};

export default Home;
