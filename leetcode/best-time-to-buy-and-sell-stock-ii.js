/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0],
        profit = 0,
        len = prices.length;
    
    for (let i = 1; i < len; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            profit += prices[i] - minPrice;
            minPrice = prices[i];
        }
    }

    return profit;
};

maxProfit([0, 3, 8, 6, 8, 6, 6, 8, 2, 0, 2, 7])