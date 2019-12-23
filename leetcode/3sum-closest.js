/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let res,
        first,
        last,
        len = nums.length,
        sum,
        diff = Infinity;
    
    nums.sort((a, b) => a - b);

    for (let i = 0; i < len - 2; i++) {

        first = i + 1;
        last = len - 1;

        while (first < last) {
            sum = nums[i] + nums[first] + nums[last];

            if (diff > Math.abs(target - sum)) {
                res = sum;
                diff = Math.abs(target - sum);
            } 

            if (sum < target) {
                while (first < last && nums[first] === nums[++first]) {}
            } else if (sum > target) {
                while (first < last && nums[last] === nums[--last]) {}
            } else {
                return sum;
            }
        }
    }

    return res;
};

console.log(threeSumClosest([0,2,1,-3], 1))