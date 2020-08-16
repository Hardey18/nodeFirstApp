const EventEmitter = require('events');
const Logger = require('./logger');
const logger  = new Logger();

// Register a listener
logger.on('message logged', arg => {
    console.log('Hello there!', arg)
})

logger.log('message');