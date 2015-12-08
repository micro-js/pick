/**
 * Imports
 */

var pick = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should pick keys from object', function (t) {
  var source = {a: 1, b: 2, c: 3}
  t.deepEqual(pick(['a', 'c'], source), {a: 1, c: 3})
  t.end()
})

test('should ignore undefined values', function (t) {
  var source = {a: 1, b: 2}
  t.deepEqual(pick(['a', 'c'], source), {a: 1})
  t.end()
})
