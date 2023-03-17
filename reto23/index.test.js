const canReconfigure = require('./index')

test('transformación correcta', () => {
  const from = 'BAL'
  const to   = 'LIB'
  expect(canReconfigure(from, to)).toBeTruthy()
})

test('U repetida, no se puede hacer la transformación', () => {
  const from = 'CON'
  const to   = 'JUU'
  expect(canReconfigure(from, to)).toBeFalsy()
})

test('no cumple el orden de transformación y la X se reasigna', () => {
  const from = 'XBOX'
  const to   = 'XXBO'
  expect(canReconfigure(from, to)).toBeFalsy()
})

test('orden de transformacion correcto', () => {
  const from = 'XBOX'
  const to   = 'XOBX'
  expect(canReconfigure(from, to)).toBeTruthy()
})

test('asigna el mismo carácter a 3 letras distintas', () => {
  const from = 'MMM'
  const to   = 'MID'
  expect(canReconfigure(from, to)).toBeFalsy()
})

test('diferente longitud de carácteres', () => {
  const from = 'AA'
  const to   = 'MID'
  expect(canReconfigure(from, to)).toBeFalsy()
})
