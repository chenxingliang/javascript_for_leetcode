/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    let mod = 1000000007;
    let ans = 0;
    for (let i = 0; i * 25 <= n; ++i) {
        let rest = (n - i * 25) | 0;
        let a = (rest / 10) | 0;
        let b = (rest % 10 / 5) | 0;
        ans = (ans + (a + 1) * (a + b + 1) % mod) % mod;
    }
    return ans;
};

let test = waysToChange(5);
console.log(test);