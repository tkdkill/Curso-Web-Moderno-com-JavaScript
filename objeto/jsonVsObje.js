/*jshint esversion: 6 */

const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c }};
console.log(JSON.stringify(obj));

// console.log(JSON.parse("{a: 1, b: 2, c: 3}")); //formato inválido
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")); //formato inválido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // formato válido
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}')); // formato válido


