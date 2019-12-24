/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0,
        current = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            current = (j - i) * Math.min(height[i], height[j]);
            max = current > max ? current : max;
        }
    }   
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))