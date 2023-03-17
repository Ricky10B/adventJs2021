const shouldBuyFidelity = require('./index')

test('sin ir al cine', () => {
  expect(shouldBuyFidelity(0)).toBe(false)
})

test('comprando una entrada al cine', () => {
  expect(shouldBuyFidelity(1)).toBe(false)
})

test('comprando cien entradas al cine', () => {
  expect(shouldBuyFidelity(100)).toBe(true)
})

test('comprando 23 entradas al cine', () => {
  expect(shouldBuyFidelity(23)).toBe(false)
})

test('comprando 24 entradas al cine', () => {
  expect(shouldBuyFidelity(24)).toBe(true)
})
