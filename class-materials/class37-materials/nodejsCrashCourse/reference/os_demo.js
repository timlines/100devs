const os = require('os');

// Platform
console.log(os.platform());

// // CPU Arch
console.log(os.arch());

// // CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// UPdtime
console.log(os.uptime()/60/60 + ' hours');
