/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var newArr = [],
        len1 = nums1.length,
        len2 = nums2.length,
        median = 0,
        newArrLen = 0
        medianLen = 0;
    while (true) {
        if (len1 == 0 && len2 != 0) {
            newArr.unshift(...nums2);
            break;
        }
        if (len2 == 0 && len1 != 0) {
            newArr.unshift(...nums1);
            break;
        }
        if (nums1[len1 - 1] > nums2[len2 - 1]) {
            newArr.unshift(nums1.pop());
            len1--;
        } else {
            newArr.unshift(nums2.pop());
            len2--;
        }
    }
    newArrLen = newArr.length;
    medianLen = newArrLen / 2;
    if (newArrLen % 2 != 0) {
        median = newArr[Math.floor(medianLen)];
    } else {
        median = (newArr[medianLen - 1] + newArr[medianLen]) / 2;
    }
    return median;
};

console.log(findMedianSortedArrays([], [2]))