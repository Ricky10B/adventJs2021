function countDecorations(bigTree) {
  let hayObjetos = false;
  let arbol = bigTree;
  while(!hayObjetos) {
    arbol = Object.values(arbol)
      .flatMap(valor => {
        if(valor && typeof valor == 'object') {
          return Object.values(valor);
        }
        return valor;
      })
      .filter(valor => valor);
    hayObjetos = arbol.every(valor => typeof valor != 'object');
  };
  
  return arbol.reduce((cont, numero) => cont += numero, 0);
}

module.exports = countDecorations
