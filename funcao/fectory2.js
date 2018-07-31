/*jshint esversion: 6 */

// função feita por A. Pinho
function criarProduto(nome, preco, desconto = 0.5) {
    return{
        nome,
        preco,
        desconto: preco - desconto
    };
}

console.log(criarProduto('arroz', 52.1));

// função feita por Professor
function criarProduto2(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    };
}

console.log(criarProduto2('Notebook', 2199.49));
console.log(criarProduto2('iPad', 1199.49));
