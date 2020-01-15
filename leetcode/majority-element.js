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
        majorityNum = nums[0];

    for (let num of nums) {
        if (hashMap[num]) {
            hashMap[num]++;
            majorityNum = hashMap[num] > hashMap[majorityNum] ? num : majorityNum;
        } else {
            hashMap[num] = 1;
        }
    }

    return majorityNum;
};