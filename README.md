# console.js

Implementation of the console namespace for the Nashorn engine.

## Requirements

Nashorn from JDK 9+ with ES6 support enabled (jjs --language=es6).


## Usage

```js
jjs> load("console.js");
jjs> console.log("Hello, %s!", "world")
Hello, world!
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
```

## Configuration

The non-standard `console.config` object is a plain object specifying options for visual display.

```js
jjs> console.dir(console.config)
[object Object] {
 "indent": " | ",
 "showMilliseconds": false,
 "showMessageType": false,
 "showTimeStamp": false,
 "useColors": false,
 "colorsByLogLevel": [object Object]
}
```
- "indent" - a string to be used to indent groups produced by `console.group()`.
- "showMilliseconds" - a boolean indicating whether to display milliseconds in timestamps.
- "showMessageType" - a boolean indicating whether to display which console method was called.
- "showTimeStamp" - a boolean indicating whether to display timestamps.
- "useColors" - a boolean indicating whether to use colors to style messages differently according to their severity. Not implemented yet.
- "colorsByLogLevel" - a plain object. Not implemented yet.

## Testing

```sh
jjs --language=es6 tests.js
```

This will first load a minimal testing environment (`testing.js`), then load the official test files from https://github.com/w3c/web-platform-tests/raw/master/console.
