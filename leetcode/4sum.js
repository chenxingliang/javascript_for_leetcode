/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = [],
        len = nums.length,
        temp;
    
    nums.sort((a, b) => a - b);


    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            continue;
        }

        if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) {
            continue;
        }

        temp = threeSum(nums.slice(i + 1), target - nums[i]);

        for (const item of temp) {
            res.push([nums[i], ...item])
        }
    }

    return res;
};

var threeSum = function (nums, target) {
    let res = [],
        len = nums.length,
        first,
        last,
        temp;
    
    nums.sort((a, b) => a - b);

    for (let i = 0; i < len - 2;) {

        first = i + 1;
        last = len - 1;

        while (first < last) {
            temp = nums[i] + nums[first] + nums[last];

            if (temp === target) {
                res.push([nums[i], nums[first], nums[last]]);
            }
            
            if (temp <= target) {
                while (first < last && nums[first] === nums[++first]) {}
            } else {
                while (first < last && nums[last] === nums[--last]) {}
            }
        }

        while (nums[i] === nums[++i]) {}
    }

    return res;

};

console.log(fourSum([5, 5, 3, 5, 1, -5, 1, -2], 4))
// console.log(threeSum([-2, 1, 1, 3, 5, 5, 5], 9))