/*jshint esversion: 6 */

let dobro = function (a) {
    return 2 * a;
};

dobro = (a) =>{
    return 2 * a;
};

doubro = a => 2 * a; // return implicito
console.log(dobro(Math.PI).toFixed(2));

let ola = function () {
    return 'Olá';
};

ola = () => 'Olá';
ola = _ => 'Olá'; // possui um parametro

console.log(ola());

