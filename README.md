# noargs-wrapper

Returns a wrapper that calls a function with no arguments.

## Installation

```bash
$ npm install noargs-wrapper
```

## Usage

This function takes in a function, and returns a wrapper that calls the passed-in function with no arguments, even if arguments are passed in to the wrapper. (unless the function passed in takes over 100 arguments)

Here's an example:

```js
var noargs = require('noargs-wrapper');


var isOne = v => v === 1; // a simple function to check if a value is one

var wrappedIsOne = noargs(isOne);

console.log(wrappedIsOne(1)); // always returns false because no arguments are passed in, and undefined is not one.


var isUndefined = v => v === void 0; // a simple function to check if a value is undefined

var wrappedIsUndefined = noargs(isUndefined);

console.log(wrappedIsUndefined(1)); // always returns true because no arguments are passed in, so undefined is undefined, hence true
```

## Contributing

PRs and issues are welcome on the github repository!