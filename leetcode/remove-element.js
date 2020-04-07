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
            [nums[i], nums[len - 1]] = [nums[len - 1], nums[i]];
            len--;
        } else {
            i++;
        }
    }

    return len;
};