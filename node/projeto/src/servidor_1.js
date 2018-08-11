const porta = 3003;

const express = require('express');
const app = express();

/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...');
    next();
    
});*/

const bancoDedados = require('./bancoDeDados');

app.get('/produtos', (req, res, next) => {
    res.send(bancoDedados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDedados.getProtuto(req.params.id));
});

app.post('/produtos', (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    });
    res.send(produto); //JSON
});

/*app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}); // Converter para JSON
});*/

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
    
});