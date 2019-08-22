const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const routes = require('./src/routes');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/huntweb', 
    { useNewUrlParser: true}
);
requireDir('./src/models');

//Rotas
app.use('/api', routes);

app.listen(3000);
