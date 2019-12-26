/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [[]];

    if (nums.length == 0) {
        return result;
    }

    for (let i = 0; i < nums.length; i++) {
        let sum = result.length;

        for (let j = 0; j < sum; j++) {
            result.push([nums[i], ...result[j]])
        }
    }

    return result;
};

subsets([1, 2, 3])