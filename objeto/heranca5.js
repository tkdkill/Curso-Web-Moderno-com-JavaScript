/*jshint esversion: 6 */

console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function () {
    return this[0];
};

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c', 'd', 'f'].first());

String.prototype.toString = function () { // não fazer esto tipo de função, vai mecher em compurtamentos já existentes
    return 'Lascou tudo';
};

console.log('Escola Cod3r'.reverse());



