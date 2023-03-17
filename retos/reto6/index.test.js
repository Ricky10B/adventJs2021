const sumPairs = require('./index')

test('array con los numeros que no estan uno al lado del otro', () => {
  expect(JSON.stringify(sumPairs([3, 5, 7, 2], 10))).toBe('[3,7]')
})

test('los numeros que no suman el valor esperado', () => {
  expect(sumPairs([-3, -2, 7, -5], 10)).toBeNull()
})

test('numeros uno al lado del otro que suman el resultado', () => {
  expect(JSON.stringify(sumPairs([2, 2, 3, 1], 4))).toBe('[2,2]')
})

test('primer y ultimo numero suman el resultado', () => {
  expect(JSON.stringify(sumPairs([6, 7, 1, 2], 8))).toBe('[6,2]')
})

test('los dos ultimos numeros suman el valor esperado', () => {
  expect(JSON.stringify(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))).toBe('[1,5]')
})
