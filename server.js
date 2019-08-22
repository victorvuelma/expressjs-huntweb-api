const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/huntweb', 
    { useNewUrlParser: true}
);
requireDir('./src/models');

//Rotas
const routes = require('./src/routes');
app.use('/api', routes);

app.listen(3000);
