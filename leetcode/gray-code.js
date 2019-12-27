/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let len = 2 ** n,
        res = [0],
        site = 0;

    for (let i = 1; i < len; i++) {
        if (i % 2 == 0) {
            site++;
        };
        res.push(i ^ site);
    }

    return res;
};

console.log(grayCode(2));