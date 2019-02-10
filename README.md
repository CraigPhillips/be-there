# Be There.js
#### A Javascript presence assertion library

Null references **suck**. Constantly checking function parameters uglies up code
in a hurry. There are other resources of parameter validation but they don't do
much to streamline those checks.

That's all Be There.js is trying to do.

## Installation
Install via NPM:
```
npm install be-there.js
```

## Usage

```
import beThere from 'be-there.js';

function functionWhoseParametersNeedTesting(p1, p2, p3, p4, p5) {
  beThere({ p1, p2, p3, p4, p5 });
}

functionWhoseParametersNeedTesting(1, null, undefined, null);
```

Should produce:

```
Error: be-there.js check failed: nulls (p2, p4) and undefined values (p3, p5) found
    at default (file:///node_modules/be-there-js/index.mjs:21:25)
    at functionWhoseParametersNeedTesting (file:///src/test.mjs:4:3)
    at file:///src/test.mjs:7:1
    at ModuleJob.run (internal/modules/esm/module_job.js:100:12)
```

## License
[MIT](./LICENSE)
