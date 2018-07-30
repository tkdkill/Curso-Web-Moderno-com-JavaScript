// Função sem retorno
function imprimerSoma(a, b) {
    console.log(a + b);
}

imprimerSoma(5, 5);
imprimerSoma(2);
imprimerSoma(2, 10, 4, 5, 6, 7, 8);
imprimerSoma();

// Função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(4, 20));
console.log(soma(2));
console.log(soma());


