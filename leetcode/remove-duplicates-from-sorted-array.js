/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    let index = 0;
    
    while (index < nums.length) {
        if (nums[index] == nums[index + 1]) {
            nums.splice(index + 1, 1);
        } else {
            index++;
        }
    }

    return nums.length;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))