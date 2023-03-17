const missingReindeer = require('./index')

test('falta el id 1', () => {
  expect(missingReindeer([0, 2, 3])).toBe(1)
})

test('falta el id 4', () => {
  expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).toBe(4)
})

test('falta el ultimo', () => {
  expect(missingReindeer([0, 1])).toBe(2)
})

test('falta el id 2', () => {
  expect(missingReindeer([3, 0, 1])).toBe(2)
})

test('falta el id 8', () => {
  expect(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])).toBe(8)
})

test('el ultimo es el que faltaba', () => {
  expect(missingReindeer([0])).toBe(1)
})
