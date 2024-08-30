const express = require('express');
const connectDB = require('./config/db');
const roverRoutes = require('./routes/roverRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware para analisar JSON
app.use(express.json());
app.use(cors());

// Conectar ao banco de dados MongoDB
connectDB();

// Log para verificar se a aplicação iniciou corretamente
console.log('Configuração inicial completa. Rotas carregadas.');

// Rotas da API
app.use('/api', roverRoutes);

// Configuração da porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
