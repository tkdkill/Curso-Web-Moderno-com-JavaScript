/*jshint esversion: 6 */

const valor = 'Global';

function minhaFuncao(params) {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec();
