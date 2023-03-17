const checkSledJump = require('./index')

test('los numeros suben y bajan formando una parabola', () => {
  expect(checkSledJump([1, 2, 3, 2, 1])).toBeTruthy()
})

test('los numeros suben y bajan formando una parabola mas pequeña', () => {
  expect(checkSledJump([0, 1, 0])).toBeTruthy()
})

test('sube y baja de forma estricta', () => {
  expect(checkSledJump([0, 3, 2, 1])).toBeTruthy()
})

test('sube y baja de forma estricta', () => {
  expect(checkSledJump([0, 1000, 1])).toBeTruthy()
})

test('no sube de forma estricta', () => {
  expect(checkSledJump([2, 4, 4, 6, 2])).toBeFalsy()
})

test('solo sube', () => {
  expect(checkSledJump([1, 2, 3])).toBeFalsy()
})

test('sube, baja y sube', () => {
  expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBeFalsy()
})
