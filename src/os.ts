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
}