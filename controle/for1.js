/*jshint esversion: 6 */

let contador = 1;
while (contador <= 10) {
    console.log(`contador = ${contador}`);
    contador++;    
}

for (let contador = 1; contador <= 10; contador++) {
    console.log(`Contador for = ${contador}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for(let i = 0; i < notas.length; i++){
    console.log(`notas = ${notas[i]}`);
}

let i = 0;
while (i <= notas.length - 1) {
    console.log(`notas While = ${notas[i]}`);
    i++;
    
}