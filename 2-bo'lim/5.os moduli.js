const { log } = require('console');
const os = require('os');
const freeMem = os.freemem();
const userInfo = os.userInfo();
console.log(`Bo'sh xotira miqdori: ${freeMem}
Foydalanuvchi haqida ma'lumot: ${userInfo.username}`);
// Topshiriq:
/* Kopyuterdagi band xotira miqdorini aniqlab, uni MB larda consolga chiqaring */ 
const totalMem = os.totalmem(); // Returns the total amount of system memory in bytes as an integer.
const totalMemConvertMB = totalMem / 1024 / 1024;
const freeMemConvertMB = freeMem / 1024 /1024;
const busyMem = totalMemConvertMB - freeMemConvertMB;
console.log(`Band RAM miqdori: ${Math.floor(busyMem)} MB
Bo'sh RAm miqdori: ${Math.floor(freeMemConvertMB)} MB`);

// independent exercise
console.log(`
CPU architecture: ${os.arch()}
${os.cpus()[0].model}, Speed: ${os.cpus()[0].speed}
HomeDir: ${os.homedir()}
Hostname: ${os.hostname()}
NetworkInterfaces: ${os.networkInterfaces().wlan0[0].address}
Platform: ${os.platform()}
Temporary Directory: ${os.tmpdir()}
OS name: ${os.type()}
the system uptime in number of seconds: ${os.uptime()}`);
