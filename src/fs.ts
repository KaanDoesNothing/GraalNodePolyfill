import {java} from "./utils";

const System = java.type("java.lang.System");
const ProcessHandle = java.type("java.lang.ProcessHandle");

export default new class fs {
    default new class constants {
        static readonly S_IRUSR = 0o400;
        static readonly S_IWUSR = 0o200;
        static readonly S_IXUSR = 0o100;
        static readonly S_IRGRP = 0o40;
        static readonly S_IWGRP = 0o20;
        static readonly S_IXGRP = 0o10;
        static readonly S_IROTH = 0o4;
        static readonly S_IWOTH = 0o2;
        static readonly S_IXOTH = 0o1;
    }
}
