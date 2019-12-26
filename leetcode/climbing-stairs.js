/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }

    let prev2 = 1,
        prev1 = 2,
        current;
    
    for (let i = 3; i <= n; i++) {
        current = prev2 + prev1;
        prev2 = prev1;
        prev1 = current;
    }

    return current;
};

console.log(climbStairs(4))