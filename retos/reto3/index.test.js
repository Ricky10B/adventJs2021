const isValid = require('./index.js')

const texto1 = "bici coche (balón) bici coche peluche" // -> ✅
const texto2 = "(muñeca) consola bici" // ✅
const texto3 = "bici coche (balón bici coche" // -> ❌
const texto4 = "peluche (bici [coche) bici coche balón" // -> ❌
const texto5 = "(peluche {) bici" // -> ❌
const texto6 = "() bici" // ❌

test('validar un string vacio', () => {
  expect(isValid("")).toBe(true)
})

test('validar que un string tenga parentesis', () => {
  expect(isValid(texto1)).toBe(true)
  expect(isValid(texto2)).toBe(true)
})

test('validar un string con parentesis sin cerrar', () => {
  expect(isValid(texto3)).toBe(false)
})

test('validar existencia de corchete', () => {
  expect(isValid(texto4)).toBe(false)
})

test('validar existencia de llaves', () => {
  expect(isValid(texto5)).toBe(false)
})

test('parentesis sin cerrar', () => {
  expect(isValid(texto6)).toBe(false)
})
