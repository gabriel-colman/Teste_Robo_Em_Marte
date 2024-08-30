const mongoose = require('mongoose');
require('dotenv').config(); // Para usar variáveis de ambiente do arquivo .env

const connectDB = async () => { // aqui é uma função assíncrona
  try {
    // Isso porque a nova atualização do mongoose pede para passar o parâmetro useCreateIndex como true
    // await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Encerra o processo em caso de erro na conexão
  }
};

module.exports = connectDB;
