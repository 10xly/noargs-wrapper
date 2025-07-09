var nAry = require('ramda.nary')

/**
 * Wrap a function so it's always called with no arguments.
 * @param {Function} fn - The function to wrap
 * @returns {Function} - A new function that ignores all passed arguments
 */
function noArgsWrapper(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError("Expected a function")
  }
  return nAry(0, fn)
}

module.exports = noArgsWrapper
