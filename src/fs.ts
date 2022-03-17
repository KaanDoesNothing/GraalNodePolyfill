import {java} from "./utils";

const System = java.type("java.lang.System");
const ProcessHandle = java.type("java.lang.ProcessHandle");

export default new class fs {
    get constants() {
        return {
            S_IRUSR: 0o400,
            S_IWUSR: 0o200,
            S_IXUSR: 0o100,
            S_IRGRP: 0o40,
            S_IWGRP: 0o20,
            S_IXGRP: 0o10,
            S_IROTH: 0o4,
            S_IWOTH: 0o2,
            S_IXOTH: 0o1
        }
    }
}
