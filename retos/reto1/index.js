function contarOvejas(ovejas) {
  return ovejas.filter(oveja => {
    return oveja.color == 'rojo' &&
    oveja.name.toLowerCase().includes("n") && 
    oveja.name.toLowerCase().includes("a")
  });
}

module.exports = contarOvejas;
