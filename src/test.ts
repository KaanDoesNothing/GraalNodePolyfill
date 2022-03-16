import {process, os} from "./index";

console.log(process.arch);
console.log(process.argv);
console.log(process.argv.length);
console.log(os.arch());
console.log(os.EOL);
console.log(os.endianness());
console.log(os.freemem());

// process.abort(); // Worked as expected
