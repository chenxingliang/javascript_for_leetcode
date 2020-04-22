/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) {
        return 0;
    }
    if (divisor === 1) {
        return dividend;
    }
    if (dividend === divisor) {
        return 1;
    }
    if (-dividend === divisor || dividend === -divisor) {
        return -1;
    }
    let sign;
    if (dividend <= 0 && divisor < 0 || dividend >= 0 && divisor > 0) {
        sign = true;
    } else {
        sign = false;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let temp = divisor,
        sum = 1,
        res = 0;
    if (dividend < divisor) {
        return 0;
    }
    while ((temp <<= 1) < dividend) {
        sum <<= 1;
    }
    if (temp === dividend) {
        sum <<= 1;
        res = sum;
    } else {
        temp >>= 1;
        while (dividend >= divisor) {
            dividend -= temp;
            res += sum;
            while (temp > dividend) {
                temp >>= 1
                sum >>= 1;
            }
        }
    }
    
    return sign ? res : -res;
};

let test = divide(150, 10);
console.log(test);