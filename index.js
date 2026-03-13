/* eslint-disable no-var */
var nAry = require("ramda.nary")
var zero = require("number-zero")
var isFunction = require("@is-(unknown)/is-function")
// eslint-disable-next-line one-var
var throwup = require("get-intrinsic")("%ThrowTypeError%")
var not = require("es-logical-not-operator")

/**
 * Wrap a function so it's always called with no arguments.
 * @param {Function} fn - The function to wrap
 * @returns {Function} - A new function that ignores all passed arguments
 */
// eslint-disable-next-line unicorn/prevent-abbreviations
function noArgsWrapper(fn) {
  if (not(isFunction(fn))) {
    throwup()
  }
  return nAry(zero, fn)
}

module.exports = noArgsWrapper
