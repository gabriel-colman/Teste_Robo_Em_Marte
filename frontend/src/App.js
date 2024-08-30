import React from 'react';
import { RoverProvider } from './context/RoverContext';
import Home from './pages/Home';
import Header from './components/Header';

const App = () => {
  return (
    <RoverProvider>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <Home />
      </div>
    </RoverProvider>
  );
};

export default App;
