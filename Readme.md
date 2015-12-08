
# pick

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Return partial copy of object containing specified subset of keys.

## Installation

    $ npm install @micro-js/pick

## Usage

```js
var pick = require('@micro-js/pick')

var source = {a: 1, b: 2, c: 3}

pick(['a', 'c'], souce) // => {a: 1, c: 3}
```

## API

### pick(keys, obj)

- `keys` - keys to pick
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
[npm-image]: https://img.shields.io/npm/v/@micro-js/pick.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/pick
