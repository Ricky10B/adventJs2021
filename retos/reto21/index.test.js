const canCarry = require('./index')

test('transporta 5 regalos con capacidad maxima de 4', () => {
  expect(
    canCarry(4, [[2, 5, 8], [3, 6, 10]])
  ).toBeFalsy()
})

test('transporta 3 regalos con capacidad maxima de 3', () => {
  expect(
    canCarry(3, [[1, 1, 5], [2, 2, 10]])
  ).toBeTruthy()
})

test('transporta 2 regalos y luego los deja y lleva 3', () => {
  expect(
    canCarry(3, [[2, 1, 5],[3, 5, 7]])
  ).toBeTruthy()
})

test('transporta 4 regalos con capacidad maxima de 4', () => {
  expect(
    canCarry(4, [[2, 3, 8],[2, 5, 7]])
  ).toBeTruthy()
})

test('transporta 2 regalos con capacidad maxima de 1', () => {
  expect(
    canCarry(1, [[2, 3, 8]])
  ).toBeFalsy()
})

test('transporta 1 regalo y luego otros 2 con capacidad maxima de 2', () => {
  expect(
    canCarry(2, [[1, 2, 4], [2, 3, 8]])
  ).toBeFalsy()
})
