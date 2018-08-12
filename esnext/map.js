const tecnologias = new Map();
tecnologias.set('react', {fremework: false});
tecnologias.set('angular', {fremework: true});

console.log(tecnologias.react);
console.log(tecnologias.get('react').fremework);

const chavesVariadas = new Map([
    [function () {}, 'função'],
    [{}, 'Objeto'],
    [123, 'Número'],
]);

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);


