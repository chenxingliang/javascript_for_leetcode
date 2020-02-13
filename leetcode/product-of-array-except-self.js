/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length;
    let result = [1];

    for (let i = 1; i < len; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let right = 1;

    for (let i = len - 1; i >= 0; i--) {
        result[i] = result[i] * right;
        right = right * nums[i];
    }

    return result;
};

productExceptSelf([1, 2, 3, 4])