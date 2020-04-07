/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0,
        len = nums.length;

    while (i < len) {
        if (nums[i] == val) {
            [nums[i], nums[n - 1]] = [nums[n - 1], nums[i]];
            n--;
        } else {
            i++;
        }
    }

    return n;
};