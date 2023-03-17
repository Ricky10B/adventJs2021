function maxProfit(prices) {
  const in1 = prices.slice(1).findIndex((n, i) => prices[i] < n);
  const n1 = prices[in1]
  const max = Math.max(...prices.slice(in1+1));

  return n1 < max ? max - n1 : -1
}

module.exports = maxProfit
