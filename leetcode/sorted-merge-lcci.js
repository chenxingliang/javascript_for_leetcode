/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    let res = [];
    A.splice(m);

    while (m > 0 && n > 0) {
        if (A[0] < B[0]) {
            res.push(A.shift());
            m--;
        } else {
            res.push(B.shift());
            n--;
        }
    }

    m == 0 ? res.push(...B) : res.push(...A);

    A.splice(0);
    A.push(...res);
};