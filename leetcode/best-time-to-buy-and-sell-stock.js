/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Infinity,
        diff = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > diff) {
            diff = prices[i] - min;
        }
    }

    return diff;
};