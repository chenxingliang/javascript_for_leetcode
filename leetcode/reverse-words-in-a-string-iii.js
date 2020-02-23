/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    arr = arr.map(x => {
        let res = '',
            len = x.length - 1;
        for (let i = 0; i <= len; i++) {
            res += x[len - i];
        }
        return res;
    });
    return arr.join(' ');
};

let test = reverseWords('hello world');

console.log(test);