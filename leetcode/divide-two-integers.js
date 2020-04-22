/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let INT_MIN = (-2) ** 31;
    let INT_MAX = 2 ** 31 - 1;
    if (dividend === 0) {
        return 0;
    }
    if (dividend === divisor) {
        return 1;
    }
    if (divisor === 1) {
        return dividend < INT_MIN || dividend > INT_MAX ? INT_MAX : dividend;;
    }
    if (divisor === -1) {
        return -dividend < INT_MIN || -dividend > INT_MAX ? INT_MAX : -dividend;;
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
    if (dividend < divisor) {
        return 0;
    }
    let temp = divisor,
        sum = 1,
        res = 0;
    while (temp << 1 < dividend) {
        if (temp << 1 < 0) {
            break;
        }
        temp <<= 1
        sum <<= 1;
    }
    while (dividend >= divisor) {
        dividend -= temp;
        res += sum;
        while (temp > dividend) {
            temp >>= 1
            sum >>= 1;
        }
    }
    if(-res < INT_MIN) return INT_MAX;
    if(res > INT_MAX) return INT_MAX;
    return sign ? res : -res;
};

let test = divide(-2147483648, -1);
console.log(test);