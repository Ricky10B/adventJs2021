function decodeNumber(symbols) {
  const valores = {'.': 1, ',': 5, ':': 10, ';': 50, '!': 100};
    
  return symbols
    .split("")
    .reduce((cont, n, i) => {
      if(valores[n] < valores[symbols[i+1]]) {
        return cont - valores[n]
      }
      return cont + valores[n]
    },0)
}

module.exports = decodeNumber
