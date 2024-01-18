/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  const len = flowerbed.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 1) {
      if (i > 0 && flowerbed[i - 1] !== 1) {
        flowerbed[i - 1] = -1;
      }
      if (i < len - 1 && flowerbed[i + 1] !== 1) {
        flowerbed[i + 1] = -1;
      }
    } else {
      if (
        (i === 0 && flowerbed[i + 1] !== 1) ||
        (i === len - 1 && flowerbed[i - 1] !== 1) ||
        (i > 0 &&
          flowerbed[i - 1] !== 1 &&
          i < len - 1 &&
          flowerbed[i + 1] !== 1)
      ) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }
  return count >= n;
};
