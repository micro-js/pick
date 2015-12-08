/**
 * Modules
 */

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
  var val

  for (var i = 0; i < keys.length; ++i) {
    val = obj[keys[i]]
    if (!isUndefined(val)) {
      copy[keys[i]] = val
    }
  }
  return copy
}
