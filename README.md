# wathen

[Wathen's formula][1] for calculating one-repetition maximum.

## Example

``` javascript
var wathen = require('wathen');

wathen(100, 10);
// => 134.74669948168537
```

## Installation

``` bash
$ npm install wathen
```

## API

``` javascript
var wathen = require('wathen');
```

### `wathen(weight, reps)`

Given _Number_ `weight` and _Number_ `reps`, returns Wathen's one-repetition
maximum as a _Number_.


   [1]: https://en.wikipedia.org/wiki/One-repetition_maximum#Wathen
