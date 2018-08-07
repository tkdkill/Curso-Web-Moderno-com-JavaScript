/*jshint esversion: 6 */

//versão simples
Array.prototype.reduce2 = function (callbeck) {
    let acumulador = this[0];
    for(let i = 1; i < this.length; i++){
        acumulador = callbeck(acumulador, this[i], i, this);

    }
    return acumulador;
};

//versão mais Aprimorada
Array.prototype.reduce3 = function (callbeck, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1;
    let acumulador = valorInicial || this[0];
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callbeck(acumulador, this[i], i, this);

    }
    return acumulador;
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
];

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas));

// Desafio 2: algum aluno é bulsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista));

// teste 2
const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma));

// teste 3
const soma2 = (total, valor) => total + valor;
const nums2 = [1, 2, 3, 4, 5, 6];
console.log(nums2.reduce3(soma2, 21));
