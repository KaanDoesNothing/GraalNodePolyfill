import {java} from "./utils";

const System = java.type("java.lang.System");
const ByteOrder = java.type("java.nio.ByteOrder");
const Runtime = java.type("java.lang.Runtime");
const InetAddress = java.type("java.net.InetAddress");

export default new class os {
    get EOL(): string {
        return System.getProperty("line.separator");
    }

    arch(): string {
        return System.getProperty("os.arch");
    }

    get devNull(): string {
        return "Not implemented";
    }

    endianness(): string {
        return ByteOrder.nativeOrder().equals(ByteOrder.BIG_ENDIAN) ? "BE" : "LE";
    }

    freemem(): number {
        return Runtime.getRuntime().freeMemory();
    }

    homedir(): string {
        return System.getProperty("user.home");
    }

    hostname(): string {
        return InetAddress.getLocalHost().getHostName();
    }

    loadavg(): string {
        return "Not implemented";
    }

    networkInterfaces(): [] {
        return []
    }

    platform(): string {
        let name = System.getProperty("os.name").toLowerCase();

        if(name.includes("windows")) return "win32";
        if(name.includes("nix")) return "linux";
        if(name.includes("mac")) return "darwin";
        
        return "unknown";
    }

    release(): string {
        return System.getProperty("os.version");
    }

    tmpdir(): string {
        return System.getProperty("java.io.tmpdir");
    }

    totalmem(): number {
        return Runtime.getRuntime().totalMemory();
    }
}