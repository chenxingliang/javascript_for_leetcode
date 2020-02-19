/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    if (len < 2) {
        return s;
    }
    let count = len >> 1;
    for (let i = 0; i < count; i++) {
        [s[i], s[len - i - 1]] = [s[len - i - 1], s[i]];
    }
    return s;
};

let test = reverseString(["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]);
console.log(test);