const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        // to-do: bu yerda message'ni url'ga http post qilib jo'natish kodi bo'lishi kerak
        console.log(message);
        this.emit('messageLogged', { id: 1, url: 'http://...' });
    }
}

module.exports = Logger;