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
  if ('function' === typeof keys) return pickPredicate(keys, obj)
  if (Array.isArray(keys)) return pickList(keys, obj)
}

function pickPredicate (fn, obj) {
  var copy = {}
  var keys = Object.keys(obj)

  for (var i = 0, len = keys.length; i < len; ++i) {
    var key = keys[i]
    var val = obj[key]

    if (fn(val, key)) {
      copy[key] = val
    }
  }

  return copy
}

function pickList (keys, obj) {
  var copy = {}

  for (var i = 0; i < keys.length; ++i) {
    var val = obj[keys[i]]
    if (typeof val !== 'undefined') {
      copy[keys[i]] = val
    }
  }

  return copy
}
