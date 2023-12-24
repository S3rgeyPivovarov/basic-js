const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (!Number.isInteger(n)) {
    return false;
  }
  const nArray = String(n).split("").map(Number);
  const xArray = [...nArray];
  xArray.splice(0, 1);
  let max = Number(xArray.join(""));
  for (let i = 1; i < nArray.length; i++) {
    const currentArray = [...nArray];
    currentArray.splice(i, 1);
    let current = Number(currentArray.join(""));
    if (current > max) {
      max = current;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
