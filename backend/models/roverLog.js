const mongoose = require('mongoose');

// RoverLog é para armazenar os logs de comandos enviados para o rover
const roverLogSchema = new mongoose.Schema({ // Cria um novo esquema de dados
  user: { // Define o campo user
    type: String,
    required: true,
  },
  commands: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
//   date: {
//     type: String,
//     required: true,
//   },

});

module.exports = mongoose.model('RoverLog', roverLogSchema); // Exporta o modelo RoverLog
