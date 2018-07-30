// Armazenando uma funçao em uma variável
const imprimirSoma = function (a, b) {
    console.log(a +b);
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(3, 3));

// retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(10, 5));

const imprimir2 = a => console.log(a);

imprimir2('Muito fixe!!!');
