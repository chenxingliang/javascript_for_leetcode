/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length;

    if (len == 0) {
        return -1;
    } else if (len == 1) {
        return nums[0] == target ? 0 : -1;
    } else {
        let low = 0,
            high = len - 1,
            middle;

        while (low < high) {
            middle = Math.floor((low + high) / 2);

            if (nums[middle] == target) {
                return middle;
            } else if (
                (nums[middle] < nums[0] && nums[0] <= target) ||
                (target <= nums[middle] && nums[0] <= target) ||
                (target <= nums[middle] && nums[middle] < nums[0])
            ) {
                high = middle - 1;
            } else {
                low = middle + 1;
            }
        }

        return low == high && nums[low] == target ? low : -1;
    }
};

console.log(search([4,5,6,7,0,1,2], 0))