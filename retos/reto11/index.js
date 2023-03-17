function shouldBuyFidelity(times) {
  let total = 0;
  let descuento = 1;
  Array.from({ length: times - 1 }, (_, i) => i).forEach(_ => {
    descuento *= .75;
    total += 12 * descuento;
  });
  let tarjetaFidelidad = 250 + total;
  return tarjetaFidelidad < 12 * times;
}

module.exports = shouldBuyFidelity
