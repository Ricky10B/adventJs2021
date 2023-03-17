function createXmasTree(height) {
  let total = height * 2 - 1
  let arbol = ''
  Array.from({ length: height }, (_,i) => i).forEach(i => {
    arbol += '\n' + '_'.repeat(i) + '*'.repeat(total - i*2) + '_'.repeat(i);
  })
  arbol = arbol.split("").reverse().join("")
  let patas = Math.floor(total / 2)
  let soporte = '_'.repeat(patas) + '#' + '_'.repeat(patas);
  return arbol + soporte + '\n' + soporte;
}

module.exports = createXmasTree
