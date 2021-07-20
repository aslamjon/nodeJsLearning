const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (arg) => {
    console.log('Listerner chaqirildi', arg);
}); /*messageLogged hodisasi bo'lganda nima qilish kerakligini .on ga yozamiz*/

emitter.emit('messageLogged', { id: 1, url: "http://..." }) 
// hodisani ro'y bergani haqida ma'lum qilamiz.

/* Topshiriq: 'messageLogging' degan xodisa yozing*/ 

emitter.on('messageLogging', (message) => {
    console.log(message);
});

emitter.emit('messageLogging', 'hodisa chaqirildi')







