/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    
    function backtrack(res, cur, open, close, max) {
        if(open > max || close > max || close > open) {
            return;
        };
        if (open == max && close == max) {
            res.push(cur);
            return;
        }
        backtrack(res, cur + '(', open + 1, close, max);
        backtrack(res, cur + ')', open, close + 1, max);
    }

    backtrack(res, '', 0, 0, n);
    return res;
};

let test = generateParenthesis(3);
console.log(test);