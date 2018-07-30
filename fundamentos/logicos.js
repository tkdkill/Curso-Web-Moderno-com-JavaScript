/*jshint esversion: 6 */

function compras(trabalho1, trabalho2) {
    const comprarGelado = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSoudavel = !comprarGelado; // operador unário

    return {comprarGelado, comprarTv50, comprarTv32, manterSoudavel};
    
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

