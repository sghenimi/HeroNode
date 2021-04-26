const EventEmitter = require('events');
const uuid = require('uuid');
class Logger extends EventEmitter{
    golog(msg) {
        this.emit('message', {id: uuid.v4(), msg})
    }
}

module.exports = Logger;