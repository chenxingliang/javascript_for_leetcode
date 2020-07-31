/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n <= 3) {
    return n - 1;
  }

  if (n == 4) {
    return 4;
  }

  let res = 1;
  let remainder = n % 3;
  let quotient = n / 3 | 0;
  if (remainder === 0) {
    return 3 ** quotient;
  } else if (remainder === 1) {
    return 3 ** (quotient - 1) * 4;
  } else {
    return 3 ** quotient * remainder;
  }
};

const test = integerBreak(7);
console.log(test); 