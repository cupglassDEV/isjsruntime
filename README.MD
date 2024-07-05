[![MIT license](https://img.shields.io/github/license/cupglassdev/isjsruntime)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/cupglassdev/isjsruntime)](https://github.com/cupglassdev/isjsruntime/issues)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=eee)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-f9f1e1?logo=bun&logoColor=14151a)](https://bun.sh)

<hr>

Refer to JSR website [![JSRPackageSetup](https://img.shields.io/badge/How_to_install_JSR_packages-000000?logo=jsr)](https://jsr.io/docs/using-packages) for installing the package. Or see the instruction above the readme file

<hr>

# Isjsruntime
Only contains 2 function
- `env()` for detecting javascript runtime. Contains one optional parameter (boolean) for enabling the legacy detector for JSDOM, and
- `engine()` for detecting javascript engine. No parameters required

And 2 types
- `jsEngineList` list of accepted engine such as `v8`, etc.
- `jsEnvList` list of accepted javascript runtime

## Detect if running on bun (working with/without polyfill)
```ts
// import the package
import * isnode from '@cupglassdev/isnode'
// make an async function
async function run(){
// check using the env() function
if (await isnode.env()==='bun'){ 
  console.log('you are in bun')
} else {
  throw new Error('it looks like you are using another js enviroment')
}
}
// run the function
run()
```
## detect if the node engine is running on v8
```
import isnode from '@cupglassdev/isnode'

function isusingv8() {
// check using the engine() function
if (isnode.engine()==='v8') return true
else return false;

}
```
