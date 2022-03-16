import {java} from "./utils";

const System = java.type("java.lang.System");

export default new class process {
    get arch(): string {
        switch(System.getProperty("os.arch")) {
            case 'aarch64':
                return 'arm64';
            default:
                console.warn("This architecture isn't registered in the switch statement! Please make an issue on the github repo with the architecture used! `"+System.getProperty("os.arch")+"`");
                return System.getProperty("os.arch");
        }
    }
}
