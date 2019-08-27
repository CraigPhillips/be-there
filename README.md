# be-there
#### A Javascript presence assertion library

Null references **suck**. Constantly checking function parameters uglies up code
in a hurry. There are other resources for parameter validation but they don't do
much to streamline those checks.

That's all be-there wants to do.

## Installation
Install via NPM:
```
npm install be-there
```

## Usage

```js
const beThere = require('be-there');

function functionWhoseParametersNeedTesting(p1, p2, p3, p4, p5) {
  beThere({ p1, p2, p3, p4, p5 });
}

functionWhoseParametersNeedTesting(1, null, undefined, null);
```

Should produce:

```
Error: be-there check failed: nulls (p2, p4) and undefined values (p3, p5) found
    at _default (/node_modules/be-there/lib/be-there.js:30:25)
    at functionWhoseParametersNeedTesting (repl:2:3)
```

## License
[MIT](./LICENSE)
