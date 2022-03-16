import {java} from "./utils";

const System = java.type("java.lang.System");
const ProcessHandle = java.type("java.lang.ProcessHandle");

export default new class process {
    abort(): void {
        return System.exit(134);
    }

    get arch(): string {
        switch(System.getProperty("os.arch")) {
            case 'aarch64':
                return 'arm64';
            default:
                console.warn("This architecture isn't registered in the switch statement! Please make an issue on the github repo with the architecture used! `"+System.getProperty("os.arch")+"`");
                return System.getProperty("os.arch");
        }
    }

    get argv(): Array<string> {
        var args:Array<string> = [ProcessHandle.current().info().command().get()];
        var opt = ProcessHandle.current().info().arguments();

        if (opt.isPresent()) {
            for (var i of opt.get()) {
                args.push(i);
            }
        }
        return args;
    }
}
