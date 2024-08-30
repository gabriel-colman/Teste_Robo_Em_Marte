const RoverLog = require('../models/roverLog');
const RoverService = require('../services/roverService'); 

// Função para processar os comandos dos rovers
exports.processRoverCommands = async (req, res) => { // Aqui é feita a requisição e a resposta
  try {
    // Log para verificar se a requisição foi recebida corretamente
    console.log('Recebendo requisição para processar comandos...');
    console.log('Body da requisição:', req.body); // Log do body recebido

    // Desestruturação do body da requisição
    const { plateauSize, rovers } = req.body; // Isso para o teste no Postman

    // Instância do serviço RoverService
    const roverService = new RoverService(plateauSize);

    // Adiciona os rovers e executa os comandos
    rovers.forEach((rover, index) => {
      roverService.addRover(rover.initialPosition);
      roverService.executeCommands(index, rover.commands);

      // Salva o log no banco de dados
      const log = new RoverLog({
        user: rover.user,
        commands: rover.commands,
      });

      log.save()
        .then(() => console.log('Log salvo no banco de dados com sucesso!'))
        .catch((err) => console.error('Erro ao salvar log no banco de dados:', err));
    });

    const finalPositions = roverService.rovers.map((_, index) =>
      roverService.getFinalPosition(index)
    );

    res.status(200).json({
      message: 'Rover commands processed successfully',
      finalPositions: finalPositions,
    });
  } catch (error) {
    console.error('Error processing rover commands:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
