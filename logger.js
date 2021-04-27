const EventEmitter = require('events');
const uuid = require('uuid');
class Logger extends EventEmitter{
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg})
    }
}

//module.exports = Logger;
//Event Manip
//const Logger = require('./logger');
const logger = new Logger();
logger.on('message', data => console.log('Called Listener', data));
logger.log("Hello node event");
logger.log("Hello hi");
logger.log("yup yup");