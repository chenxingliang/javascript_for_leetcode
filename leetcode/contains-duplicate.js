/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hash = {};

    for (let num of nums) {
        if (hash[num]) {
            return true;
        } else {
            hash[num] = true;
        }
    }

    return false;
};