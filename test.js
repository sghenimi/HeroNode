const Logger = require('./logger');

const logger = new Logger();
logger.on('message', data => console.log('Called Listener', data));
logger.golog("Hello node event");
logger.golog("Hello hi");
logger.golog("yup yup");