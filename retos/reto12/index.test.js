const getMinJump = require('./index')

test('obstaculos con paso cada 4 saltos', () => {
  const obstacles = [5, 3, 6, 7, 9]
  expect(getMinJump(obstacles)).toBe(4)
})

test('obstaculos con paso cada 7 saltos', () => {
  const obstacles = [2, 4, 6, 8, 10]
  expect(getMinJump(obstacles)).toBe(7)
})

test('obstaculos con paso cada 4 saltos', () => {
  const obstacles = [1, 2, 3, 5]
  expect(getMinJump(obstacles)).toBe(4)
})
test('obstaculos con paso cada 2 saltos', () => {
  const obstacles = [3, 7, 5]
  expect(getMinJump(obstacles)).toBe(2)
})
test('obstaculos con paso cada 2 saltos', () => {
  const obstacles = [9, 5, 1]
  expect(getMinJump(obstacles)).toBe(2)
})

test('obstaculos con paso cada 3 saltos', () => {
  const obstacles = [1, 4, 8]
  expect(getMinJump(obstacles)).toBe(3)
})
