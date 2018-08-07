/*jshint esversion: 6 */

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
];

/*console.log(produtos.filter(function (p) {
    return false;
}));

console.log(produtos.filter(function (p) {
    return p.preco > 2500;
}));

console.log(produtos.filter(function (p) {
    return p.fragil === true;
}));*/

/*console.log(produtos.filter(function (p) {
    return p.preco > 2400 && p.fragil === true;
    
}));*/

const precoAlto = produto => produto.preco >= 500;
const maisFragil = produto => produto.fragil;

const resultado = produtos.filter(precoAlto).filter(maisFragil);

console.log(resultado);
