/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let ans = nums[0],
        sum = 0;

    for (const num of nums) {
        if (sum <= 0) {
            sum = num;
        } else {
            sum += num;
        }
        ans = Math.max(ans, sum);
    }

    return ans;
};

console.log(maxSubArray([1, 2, 3, 4, -5, 6, -1]))