const fs = require('fs');


const caminho = __dirname + '/arquivo.json';

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// assincrona --> é a mais intereçante
fs.readFile(caminho, 'utf-8', (err, conteuso) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});

const config = require('./arquivo.json');
console.log(config.db);

// ler diretorios / pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Arquivos da pasta...');
    console.log(arquivos);

});

