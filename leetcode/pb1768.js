/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const minLength = Math.min(word1.length, word2.length);

  let result = "";

  for (let i = 0; i < minLength; i++) {
    result = result.concat(word1[i] + word2[i]);
  }
  return result
    .concat(word1.substring(minLength))
    .concat(word2.substring(minLength));
};
