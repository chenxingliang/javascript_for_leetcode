/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (nums.length == 1) {
        return nums[0];
    }

    let len = nums.length;

    for (let i = 0; i < len; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            return nums[i];
        }
    }
};