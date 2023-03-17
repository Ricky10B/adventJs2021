const getCoins = require('./index')

test('sin vueltos', () => {
  expect(JSON.stringify(getCoins(0))).toBe('[0,0,0,0,0,0]')
})

test('vueltos de 51 céntimos', () => {
  expect(JSON.stringify(getCoins(51))).toBe('[1,0,0,0,0,1]')
})

test('vueltos de 3 céntimos', () => {
  expect(JSON.stringify(getCoins(3))).toBe('[1,1,0,0,0,0]')
})

test('vueltos de 5 céntimos', () => {
  expect(JSON.stringify(getCoins(5))).toBe('[0,0,1,0,0,0]')
})

test('vueltos de 16 céntimos', () => {
  expect(JSON.stringify(getCoins(16))).toBe('[1,0,1,1,0,0]')
})

test('vueltos de 100 céntimos', () => {
  expect(JSON.stringify(getCoins(100))).toBe('[0,0,0,0,0,2]')
})
