function canReconfigure(from, to) {
  if(from.length != to.length) return false;

  let usados = {}
    
  return from.split("").every((f, i) => {
    if(usados[f] && usados[f] != to[i]) return false;
    
    if(Object.values(usados).some(v => v == to[i]) && usados[f] != to[i]){
      return false;
    }

    usados[f] = to[i];
    return true;
  });
}

module.exports = canReconfigure
