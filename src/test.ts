import {process} from "./index";
import {os} from "./index";

console.log(process.arch);
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