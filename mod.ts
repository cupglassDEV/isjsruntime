// @ts-nocheck: since this script contains unsafe runtime checking
/**
 * js runtime list
 * @since 0.0.1
 */
export type jsEnvList =
    | "jx"
    | "node"
    | "deno"
    | "bun"
    | "iojs"
    | "browser"
    | "jsdom"
    | "webworker";

/**
 * node engine list
 * @since 0.0.1
 */
export type jsEngineList = "v8" | "chakra" | "spidermonkey";

function isABrowser(): boolean {
    try {
        //@ts-ignore: deno stop throwing this shit ok
        if (typeof process !== "undefined" && process.versions.node !== null) {
            return false;
        }
        // deno-lint-ignore no-empty
    } catch (_e) {}
    return true;
}
function g() {
    return (window || globalThis);
}
function proc(){
    //@ts-ignore:stop
    const d = typeof Deno !== "undefined"?Deno:process
    return d 
}
/**
 * detect the js runtime
 * @since 0.0.1
 * @param legacy - enable the legacy mode for the jsdom detector. Because on the newer update they changed the useragent as `jsdom` rather than `Node.js`
 */
export function env(legacy: boolean = false): jsEnvList | "others" {
    
    // eslint-disable-next-line no-var
    if (
        typeof self !== "undefined" &&
        self.constructor.name ===
            "DedicatedWorkerGlobalScope"
    ) returns = "webworker";
    if (
        (legacy
            ? navigator.userAgent.includes("Node.js")
            : (navigator.userAgent.includes("jsdom")) ||
                g().name === "nodejs")
    ) returns = "jsdom";
    const p = Object.keys(proc().version)
    //@ts-ignore: ok
    if (typeof Deno !== "undefined" && p.includes("deno")) return "deno"
    else if (isABrowser()) return "browser"
    //@ts-ignore: finally deno dosent throw all this shit
    switch (proc().release.name) {
        case "iojs": return "iojs"
        case "node": return "node"
        // deno-lint-ignore no-empty
        default: {}
    }
    if (p.includes("bun")) return "bun";
    //@ts-ignore: stop
    if (typeof proc().jxversion !== "undefined" && typeof jxcore !== "undefined") return "jx";
}
/**
 * detect the node engine. Such as ```v8```, and more
 * @since 0.0.1
 */
export function engine(): jsEngineList | undefined {
    if (isABrowser()) {
        throw new Error(
            "This function only works if you arent in browser or deno",
        );
    }
    //@ts-ignore: dang deno stop throwing this shit again
    const v = Object.keys(process.versions);
    if (v.includes("v8")) return "v8";
    else if (v.includes("chakra")) return "chakra";
    else if (v.includes("spidermonkey")) return "spidermonkey";
    return undefined;
}
