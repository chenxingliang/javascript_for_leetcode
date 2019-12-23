/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    if (str.length < 1 || str == null) {
        return 0;
    }

    let trimStr = str.trim();

    if (trimStr.length < 1) {
        return 0;
    }

    let numberStr = '';

    if (trimStr[0] != '+' && trimStr[0] != '-' && isNaN(trimStr[0])) {
        return 0;
    } else if ((trimStr[0] == '+' || trimStr[0] == '-') && (trimStr[1] == ' ' || isNaN(trimStr[1]))) {
        return 0;
    } else {
        numberStr += trimStr[0];
        for (let i = 1; i < trimStr.length; i++) {
            if (trimStr[i] && trimStr[i] != ' ' && !isNaN(trimStr[i])) {
                numberStr += trimStr[i];
            } else {
                break;
            }
        }
    }

    let max = 2 ** 31 - 1,
        min = -(2 ** 31),
        number = Number(numberStr);

    return number > max ? max : number < min ? min : number;
};

console.log(myAtoi("-   234"))