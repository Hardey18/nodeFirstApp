const os = require('os');

let freeMemory = os.freemem();
let totalMemory = os.totalmem();
let cpu = os.cpus();
console.log(`Free Memory: ${freeMemory}`);
console.log(`Total Memory: ${totalMemory}`);
console.log(cpu);