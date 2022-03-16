interface JavaInterface {
    type: ((input: string) => any)
}

//@ts-ignore
export let java: JavaInterface = Java;