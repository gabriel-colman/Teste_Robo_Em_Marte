import React from 'react';

// O componente Header exibe o título e a descrição do simulador
const Header = () => { // Definimos o componente Header
  return (
    <header className="py-6 bg-purple-900 text-white text-center shadow-md"> {/* Alterado para roxo escuro */}
      <h1 className="text-4xl font-bold">Simulador de Rovers em Marte</h1>
      <p className="mt-2">Controle os rovers e explore o plateau marciano!</p>
    </header>
  );
};

export default Header;
