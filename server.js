const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/huntweb', 
    { useNewUrlParser: true}
);
requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'https://github.com/facebook/react-native/'
    })

    return res.send('Hello World');
});

app.listen(3000);
