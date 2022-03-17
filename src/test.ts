import {process, os, fs} from "./index";

console.log(process.arch);
console.log(process.argv);
console.log(process.argv.length);

console.log(os.arch());
console.log(os.EOL);
console.log(os.endianness());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.version());

console.log(JSON.stringify(fs.constants, null, 2));

// process.abort(); // Worked as expected
