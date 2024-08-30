import React from 'react';
import { RoverProvider } from './context/RoverContext';
import Home from './pages/Home';
import Header from './components/Header';
import './styles/App.css'; // Importa os estilos globais

const App = () => {
  return (
    <RoverProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
        <Header />
        <div className="container mx-auto p-4">
          <Home />
        </div>
      </div>
    </RoverProvider>
  );
};

export default App;
