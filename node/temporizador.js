const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 6', function () {
    console.log('Executando Tarefa1!', new Date().getSeconds());
    
});

setTimeout( function () {
    tarefa1.cancel();
    console.log('Cancelendo a tarefa1!');
    
    
}, 20000);

// funções do propria linguagem javascript
// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 6)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando a tarefa2!', new Date().getSeconds());
    
});