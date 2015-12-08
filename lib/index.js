/**
 * Modules
 */

var foreach = require('@micro-js/foreach')
var isUndefined = require('@micro-js/is-undefined')

/**
 * Expose pick
 */

module.exports = pick['default'] = pick

/**
 * Return partial copy of object containing specified subset of keys.
 * @param  {Array} keys
 * @param  {Object} obj  Source
 * @return {Object}
 */

function pick (keys, obj) {
  var copy = {}
  foreach(copyProp, keys)
  return copy

  var val
  function copyProp (key) {
    val = obj[key]
    if (!isUndefined(val)) {
      copy[key] = obj[key]
    }
  }
}
