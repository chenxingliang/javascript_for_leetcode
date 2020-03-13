/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = A.reduce((sum, item) => {
        return sum + item;
    }, 0);

    if (sum % 3 !== 0) {
        return false;
    }

    sum = sum / 3;

    let left = 0,
        leftSum = A[left],
        right = A.length - 1,
        rightSum = A[right];

    while (left + 1 < right) {
        if (leftSum === sum && rightSum === sum) {
            return true;
        }
        if (leftSum !== sum) {
            left++;
            leftSum += A[left];
        }
        if (rightSum !== sum) {
            right--;
            rightSum += A[right];
        }
    }

    return false;
};

let test = canThreePartsEqualSum([1, 2, 3, 1, 2]);

console.log(test);