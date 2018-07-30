/*jshint esversion: 6 */

function teste1(num) {
    if(num > 7)
        console.log(num);

    console.log('Final');
}

teste1(7.2);
teste1(6.1);

function teste2(num) {
    if(num > 7); { // cuidado com o ;, não usar com as estruturas de control
        console.log(num);
    }
}

teste2(6);
teste2(8);