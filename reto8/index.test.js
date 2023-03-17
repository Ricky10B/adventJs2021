const maxProfit = require('./index')

test('lista de precios vacíos', () => {
  const pricesBtc = []
  expect(maxProfit(pricesBtc)).toBe(-1)
})

test('compra a 18 vende a 34', () => {
  const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
  expect(maxProfit(pricesBtc)).toBe(16)
})

test('los precios van de subida', () => {
  const pricesEth = [10, 20, 30, 40, 50, 60, 70]
  expect(maxProfit(pricesEth)).toBe(60)
})

test('los precios van de bajada', () => {
  const pricesDoge = [18, 15, 12, 11, 9, 7]
  expect(maxProfit(pricesDoge)).toBe(-1)
})

test('todos los precios iguales', () => {
  const pricesAda = [3, 3, 3, 3, 3]
  expect(maxProfit(pricesAda)).toBe(-1)
})
