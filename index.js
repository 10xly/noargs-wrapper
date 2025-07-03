const GetIntrinsic = require("get-intrinsic")
const ignoreArgument = require("ignore-argument")
const isFunction = require("is-function")

const $Array = GetIntrinsic('%Array%')

/**
 * Wrap a function so it's always called with no arguments.
 * @param {Function} fn - The function to wrap
 * @returns {Function} - A new function that ignores all passed arguments
 */
function noArgsWrapper(fn) {
  if (!isFunction(fn)) {
    throw new TypeError("Expected a function")
  }
  const ignoreAll = $Array(100).fill(true)

  return ignoreArgument(fn, ...ignoreAll)
}

module.exports = noArgsWrapper
