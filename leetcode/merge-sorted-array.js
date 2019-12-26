/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = 0,
        j = 0,
        copy = [...nums1];

    if (m == 0) {
        for (let idx = 0; idx < n; idx++) {
            nums1[idx] = nums2[idx];
        }
    } else {
        for (let idx = 0; idx < m + n; idx++) {
            if (i < m && j < n) {
                if (copy[i] <= nums2[j]) {
                    nums1[idx] = copy[i];
                    i++;
                } else {
                    nums1[idx] = nums2[j];
                    j++;
                }
            } else {
                if (i < m) {
                    nums1[idx] = copy[i];
                    i++;
                }
                if (j < n) {
                    nums1[idx] = nums2[j];
                    j++;
                }
            }
        }
    }

    return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0],3,[2, 5, 6],3))