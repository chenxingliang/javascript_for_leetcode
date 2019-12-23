/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let map = new Set([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]);

    let romanNum = '';

    for (const item of map) {
        let k = Math.floor(num / item[0]);
        num %= item[0];
        for (let i = 0; i < k; i++) {
            romanNum += item[1];
        }
        if (num == 0) {
            break;
        }
    }

    return romanNum;

};

console.log(intToRoman(1))