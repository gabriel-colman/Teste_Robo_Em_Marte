const express = require('express');
const router = express.Router();
const roverController = require('../controllers/roverController');

// Rota para processar os comandos dos rovers
router.post('/rovers', roverController.processRoverCommands);

// Log para confirmar que a rota está carregada
console.log('Rota /api/rovers configurada.');

module.exports = router;
