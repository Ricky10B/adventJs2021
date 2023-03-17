function checkSledJump(heights) {
  const max = Math.max(...heights)
  const ind = heights.findIndex(n => n == max);

  const arrIzq = heights.slice(0,ind+1).reverse();
  const arrDer = heights.slice(ind);
  
  if(arrIzq.length == 1 || arrDer.length == 1) return false;
  const a1 = arrIzq.slice(1).every((a, i) => arrIzq[i] > a);
  const a2 = arrDer.slice(1).every((a, i) => arrDer[i] > a);
  
  return a1 && a2;
}

module.exports = checkSledJump
