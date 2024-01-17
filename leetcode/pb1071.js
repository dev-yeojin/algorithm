/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1.concat(str2) !== str2.concat(str1)) {
    return "";
  } else if (str1 === str2) {
    return str1;
  } else {
    const len1 = str1.length;
    const len2 = str2.length;

    return len1 > len2
      ? gcdOfStrings(str1.slice(len2), str2)
      : gcdOfStrings(str2.slice(len1), str1);
  }
};
