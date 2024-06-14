
const express = require('express');
const server = express();
const produtos  = require('./src/data/menu.json');
const { validate } = require('jsonschema');
const cors = require('cors'); // Importe o pacote cors


// Use o middleware cors
server.use(cors());

server.get('', (req, res) => {

            res.json(menu);
        })


server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/Menu');
});
