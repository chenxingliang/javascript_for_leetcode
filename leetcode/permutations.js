/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let output = [],
        n = nums.length;

    backtrack(n, nums, output, 0);

    return output;
};

var backtrack = function (n, nums, output, first) {
    if (first == n) {
        output.push([...nums]);
    }

    for (let i = first; i < n; i++) {
        [nums[first], nums[i]] = [nums[i], nums[first]];
        backtrack(n, nums, output, first + 1);
        [nums[first], nums[i]] = [nums[i], nums[first]];
    }
}

console.log(permute([1,2,3]))