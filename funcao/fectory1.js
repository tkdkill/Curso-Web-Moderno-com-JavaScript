/*jshint esversion: 6 */

// função Factory é uma função que retorna um objeto (Fabrica), fabrica uma instância de um objeto

const prod1 = {
    nome: '...',
    preco: 45
};
const prod2 = {
    nome: '...',
    preco: 50
};

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        subrenome: 'Silva'
    };
}

console.log(criarPessoa());
