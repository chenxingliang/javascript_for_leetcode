/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let len = nums.length;

    if (len == 1) {
        return nums[0];
    }

    let hashMap = {},
        majorityNum = null;

    for (let num of nums) {
        if (hashMap[num]) {
            hasMap[num]++;
            majorityNum = hasMap[num] > hasMap[majorityNum] ? num : majorityNum;
        } else {
            hasMap[num] = 1;
        }
    }

    return majorityNum;
};