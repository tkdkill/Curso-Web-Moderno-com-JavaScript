/*jshint esversion: 6 */

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa();
p1.nome = 'Maria';
p1.falar();

const CriarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    };
};

const p2 = CriarPessoa('João')
p2.falar();
