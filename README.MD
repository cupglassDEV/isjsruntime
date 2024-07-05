[![MIT license](https://img.shields.io/github/license/cupglassdev/isjsruntime)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/cupglassdev/isjsruntime)](https://github.com/cupglassdev/isjsruntime/issues)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=eee)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-f9f1e1?logo=bun&logoColor=14151a)](https://bun.sh)

<hr>

Refer to JSR website [![JSRPackageSetup](https://img.shields.io/badge/How_to_install_JSR_packages-000000?logo=jsr)](https://jsr.io/docs/using-packages) for installing the package. Or see the instruction above the readme file

<hr>

# Isjsruntime
<b>Update</b>: Full deno support AND bun (that means the `engine()` function worked!). Updated readme with consistent implementation (because of the [old repo](https://github.com/cupglassdev/isjsruntime-legacy)). And now the script is typesafe!
<br>

Only contains 2 non-async function (which on fails, return `undefined`)
- `env(legacy=false)` for detecting javascript runtime. Contains one optional parameter (boolean) for enabling the legacy detector for JSDOM, and
- `engine()` for detecting javascript engine. No parameters required

And 2 types
- `jsEngineList` list of accepted engine such as `v8`, etc.
- `jsEnvList` list of accepted javascript runtime

## Detect if running on bun (working with/without polyfill)
```ts
// import the package
import * isjs from '@cupglassdev/isjsruntime'
// make a function
function run(){
// check using the env() function
const env = isjs.env()
if (env==='bun'){ 
  console.log('you are on bun')
} else {
  throw new Error('it looks like you are using another js enviroment')
}
}
// run the function
run()
```
## detect if the node engine is running on v8
```ts
import * as isjs from '@cupglassdev/isjsruntime'

function isusingv8() {
// check using the engine() function
const engine = isjs.engine()
if (engine ==='v8') return true
else return false;
}
//print it onto the console
console.log(isusingv8())
```
