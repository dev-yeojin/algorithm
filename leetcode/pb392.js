/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const sLen = s.length;
  if (sLen === 0) return true;

  let sIndex = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[sIndex] === t[i]) sIndex++;
  }
  return sIndex === sLen;
};
