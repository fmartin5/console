# console.js
Implementation of the console namespace for the Nashorn engine.

## Usage

```js
jjs> load("console.js");
jjs> console.dir(console);
[object Object] {
 "config": [object Object],
 "assert": [object Function(2)],
 "clear": [object Function(0)],
 "count": [object Function(1)],
 "countReset": [object Function(1)],
 "debug": [object Function(1)],
 "dir": [object Function(2)],
 "dirxml": [object Function(1)],
 "error": [object Function(1)],
 "group": [object Function(1)],
 "groupCollapsed": [object Function(0)],
 "groupEnd": [object Function(0)],
 "info": [object Function(1)],
 "log": [object Function(1)],
 "time": [object Function(1)],
 "timeEnd": [object Function(1)],
 "trace": [object Function(1)],
 "table": [object Function(0)],
 "warn": [object Function(2)]
}
jjs>
```

## Testing

```sh
jjs --language=es6 tests.js
```

This will first load a minimal testing environment (`testing.js`), then load the official test files from https://github.com/w3c/web-platform-tests/raw/master/console.
