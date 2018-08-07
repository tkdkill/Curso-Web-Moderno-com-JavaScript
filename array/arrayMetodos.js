/*jshint esversion: 6 */

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // massa partiu o carro?
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // remove a primeira posição
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona elemento na primeira posição
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1); // massa avariou
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array gerado
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);






