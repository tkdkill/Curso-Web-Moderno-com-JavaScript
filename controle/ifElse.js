/*jshint esversion: 6 */

const imprimirResultado = function (nota) {
    if(nota >= 7){
        console.log('Aprovado ' + nota);
    }else{
        console.log('Reprovado');
    }
};

imprimirResultado(8);
imprimirResultado(6.1);
imprimirResultado('Epa!'); // Cuidado