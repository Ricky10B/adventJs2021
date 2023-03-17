const decodeNumber = require('./index')

test('3 puntos representan 3 en numero', () => {
  expect(decodeNumber('...')).toBe(3)
})

test('un punto y una coma representan 4 en numero', () => {
  expect(decodeNumber('.,')).toBe(4)
})

test('una coma y un punto representan 6 en numero', () => {
  expect(decodeNumber(',.')).toBe(6)
})

test('una coma y 3 puntos es 8', () => {
  expect(decodeNumber(',...')).toBe(8)
})

test('7 puntos y una ! se suman', () => {
  expect(decodeNumber('.........!')).toBe(107)
})

test('el . se le resta al ;', () => {
  expect(decodeNumber('.;')).toBe(49)
})

test('un punto se le suma al , y el otro le resta', () => {
  expect(decodeNumber('..,')).toBe(5)
})

test('el segundo punto y la coma se restan y el resto suma', () => {
  expect(decodeNumber('..,!')).toBe(95)
})

test('el . y ; se le restan al !', () => {
  expect(decodeNumber('.;!')).toBe(49)
})

test('se suman los 3 !', () => {
  expect(decodeNumber('!!!')).toBe(300)
})

test('; se le restan al !', () => {
  expect(decodeNumber(';!')).toBe(50)
})
