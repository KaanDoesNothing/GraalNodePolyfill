import {process} from "./index";
import {os} from "./index";

console.log(process.arch);
console.log(os.arch());
console.log(os.EOL);
console.log(os.endianness());
console.log(os.freemem());
console.log(os.homedir());