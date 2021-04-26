const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter { }

//init Object
const myEmitter = new MyEmitter()

//EventListener
myEmitter.on('event', () => console.log('Event Fired!'));

//init Event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
