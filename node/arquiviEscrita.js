const fs = require('fs');

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
};

// criar ficheiro e gravar conteudo
/*fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo guardado!');   
});*/


const caminho = __dirname + '/arquivoGerado.json';

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);