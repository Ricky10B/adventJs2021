function sumPairs(numbers, result) {
  let res = null;
  numbers.find((number, i) =>
    numbers.slice(i+1).find(n => {
      if(n + number == result) {
        res = [number, n];
        return true;
      }
    })
  );
  return res;
}

module.exports = sumPairs
