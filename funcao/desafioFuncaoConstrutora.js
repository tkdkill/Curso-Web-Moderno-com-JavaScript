/*jshint esversion: 6 */

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Maria');
p1.falar();