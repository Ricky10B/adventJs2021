function getCoins(change) {
  let result = [0, 0, 0, 0, 0, 0];
  let coins = [50, 20, 10, 5, 2, 1];
  while(change > 0) {
    coins.find((c, i) => {
      if(change - c > 0 || change - c == 0) {
        result[i]++;
        change -= c;
        return true;
      }
    });
  }
  return result.reverse();
}

module.exports = getCoins
