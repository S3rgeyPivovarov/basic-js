const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== "string" || typeof s2 !== "string") {
    return fasle;
  }

  let count = 0;
  s1Array = s1.split("");
  s2Array = s2.split("");
  s1Array.forEach((a) => {
    let index = s2Array.indexOf(a);
    if (index !== -1) {
      count += 1;
      s2Array[index] = false;
    }
  });
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
