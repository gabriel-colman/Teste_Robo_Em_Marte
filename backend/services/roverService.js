class RoverService { // Classe para gerenciar a posição e os comandos dos rovers
    constructor(plateau) {
      this.plateau = plateau; // { x: 5, y: 5 }
      this.rovers = []; // Lista de rovers com seus estados atuais
    }
  
    addRover(initialPosition) { 
      // Adiciona um novo rover à lista
      this.rovers.push({
        ...initialPosition,
        path: [],
      });
    }
  
    executeCommands(roverIndex, commands) {
      // Executa uma série de comandos para um rover específico
      const rover = this.rovers[roverIndex];
      for (let command of commands) {
        if (command === 'L') this.turnLeft(rover);
        else if (command === 'R') this.turnRight(rover);
        else if (command === 'M') this.move(rover);
      }
    }
  
    turnLeft(rover) {
      // Gira o rover 90 graus para a esquerda
      const directions = ['N', 'W', 'S', 'E'];
      rover.direction = directions[(directions.indexOf(rover.direction) + 1) % 4];
    }
  
    turnRight(rover) {
      // Gira o rover 90 graus para a direita
      const directions = ['N', 'E', 'S', 'W'];
      rover.direction = directions[(directions.indexOf(rover.direction) + 1) % 4];
    }
  
    move(rover) {
      // Move o rover uma unidade para a frente na direção atual
      const { x, y, direction } = rover;
      if (direction === 'N' && y < this.plateau.y) rover.y += 1;
      else if (direction === 'E' && x < this.plateau.x) rover.x += 1;
      else if (direction === 'S' && y > 0) rover.y -= 1;
      else if (direction === 'W' && x > 0) rover.x -= 1;
    }
  
    getFinalPosition(roverIndex) {
      // Retorna a posição final de um rover após a execução dos comandos
      return this.rovers[roverIndex];
    }
  }
  
  module.exports = RoverService;
  