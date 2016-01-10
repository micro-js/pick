
# pick

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Return partial copy of object containing specified subset of keys.

## Installation

    $ npm install @f/pick

## Usage

```js
var pick = require('@f/pick')

var source = {a: 1, b: 2, c: 3, d: function () {}}

pick(['a', 'c'], source) // => {a: 1, c: 3}
pick('a', source)        // => {a: 1}
pick(isFunction, source) // => {d: function () {}}
```

## API

### pick(keys, obj)

- `keys` - Key(s) to pick, or predicate function that receives `(val, key)`.
- `obj` - source object to copy values from

**Returns:** partial copy of `obj`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/pick.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/pick
[git-image]: https://img.shields.io/github/tag/micro-js/pick.svg
[git-url]: https://github.com/micro-js/pick
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/pick.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/pick
