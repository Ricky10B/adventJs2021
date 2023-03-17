const daysToXmas = require('./index')

test('fecha 1 de diciembre', () => {
  const date1 = new Date('Dec 1, 2021')
  expect(daysToXmas(date1)).toBe(24)
})

test('fecha 24 de diciembre', () => {
  const date2 = new Date('Dec 24, 2021 00:00:01')
  expect(daysToXmas(date2)).toBe(1)
})

test('faltando 1 segundo para el 25 de diciembre', () => {
  const date3 = new Date('Dec 24, 2021 23:59:59')
  expect(daysToXmas(date3)).toBe(1)
})

test('20 de diciembre', () => {
  const date4 = new Date("December 20, 2021 03:24:00")
  expect(daysToXmas(date4)).toBe(5)
})

test('dia de navidad', () => {
  const date = new Date('Dec 25, 2021')
  expect(daysToXmas(date)).toBe(0)
})

test('un dia despues de navidad', () => {
  const date1 = new Date('Dec 26, 2021')
  expect(daysToXmas(date1)).toBe(-1)
})

test('31 de diciembre', () => {
  const date2 = new Date('Dec 31, 2021')
  expect(daysToXmas(date2)).toBe(-6)
})

test('primer dia de enero del 2022', () => {
  const date3 = new Date('Jan 1, 2022 00:00:01')
  expect(daysToXmas(date3)).toBe(-7)
})

test('un segundo antes del 2 de enero del 2022', () => {
  const date4 = new Date('Jan 1, 2022 23:59:59')
  expect(daysToXmas(date4)).toBe(-7)
})
