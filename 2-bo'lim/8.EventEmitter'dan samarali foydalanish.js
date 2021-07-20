
const Logger = require('./logger');
const logger = new Logger()

logger.on('messageLogged', (arg) => {
    console.log('Listerner chaqirildi', arg);
}); /*messageLogged hodisasi bo'lganda nima qilish kerakligini .on ga yozamiz*/

logger.log('message');
