/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) {
        return x;
    }

    let x0 = x,
        x1 = (x0 + x / x0) / 2;

    while (Math.abs(x0 - x1) >= 1) {
        x0 = x1;
        x1 = (x0 + x / x0) / 2;
    }

    return Math.floor(x1);
    
};