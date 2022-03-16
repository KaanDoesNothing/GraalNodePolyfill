import {java} from "./utils";

const System = java.type("java.lang.System");

export default new class process {
    get arch(): string {
        return System.getProperty("os.arch");
    }
}