'use strict';
const os = require('os');

//Os Platform &  archi & CPU
console.log(os.platform());

//US archi
console.log(os.arch());

//US archi
console.log(os.cpus());

// free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// home directory
console.log(os.homedir())

//UpTime
console.log((os.uptime()/3600)/24);