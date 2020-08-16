const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        // Raise an event
        this.emit('message logged', {id: 1, url: 'http://decagon.dev'})
    }
}

module.exports = Logger;