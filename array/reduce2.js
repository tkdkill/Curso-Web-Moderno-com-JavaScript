/*jshint esversion: 6 */

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
];

// Desafio 1: Todos os alunos são bolsistas?

// AP
const bolsistas = aluno => aluno.bolsista;

const resultado1 = alunos.map(a => a.bolsista).reduce(function (acumulador, atual) {
    //console.log(acumulador, atual);
    if (acumulador && atual === true){
        return true;
    }
    return false;
    
});
console.log(resultado1);

// feito pelo prof.
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));


// Desafio 2: algum aluno é bulsista

// AP
const resultado2 = alunos.map(a => a.bolsista).reduce(function (acumulador, atual) {
    //console.log(acumulador, atual);
    if ((acumulador || atual >= true)) {
        return true;
    }
    return false;

});
console.log(resultado2);

// feito pelo prof.
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));

