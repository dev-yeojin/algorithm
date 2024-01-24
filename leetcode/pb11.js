/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while(left < right) {
        const x = right - left;
        const y = Math.min(height[left], height[right]);
        height[right] > height[left] ? left ++ : right --;
        max = Math.max(max, x*y);
    }
    return max;
};