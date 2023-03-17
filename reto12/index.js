function getMinJump(obstacles) {
  let salto = 1;
  let encontrado = false;
  while(!encontrado){
    salto++;
    encontrado = obstacles.every(n => !Number.isInteger(n / salto));
  }
  return salto;
}

module.exports = getMinJump
