import React from 'react';
import './Instructions.css'; // Certifique-se de criar e importar o arquivo CSS

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h2 className="instructions-title">Navegando o Platô</h2>
      <p className="instructions-subtitle">Os comandos do rover são: 'L', 'R', 'M'.</p>
      <div className="instructions-steps">
        <div className="step">
          <div className="step-number">L</div> 
          
          <p className="step-description">Gira o rover 90 graus para a esquerda.</p>
        </div>
        <div className="step">
          <div className="step-number">R</div>
          
          <p className="step-description">Gira o rover 90 graus para a direita.</p>
        </div>
        <div className="step">
          <div className="step-number">M</div>
          
          <p className="step-description">Move o rover para frente em uma unidade da grade, mantendo a direção.</p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
