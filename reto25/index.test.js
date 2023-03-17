const canMouseEat = require('./index')

describe('Pruebas del cuarto 1', () => {
  const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]

  test('arriba del raton', () => {
    expect(canMouseEat('up', room)).toBeFalsy()
  })

  test('abajo del raton', () => {
    expect(canMouseEat('down', room)).toBeTruthy()
  })

  test('a la derecha del raton', () => {
    expect(canMouseEat('right', room)).toBeFalsy()
  })

  test('a la izquierda del raton', () => {
    expect(canMouseEat('left',  room)).toBeFalsy()
  })
})

describe('Pruebas del cuarto 2', () => {
  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]

  test('arriba del raton', () => {
    expect(canMouseEat('up', room2)).toBeFalsy()
  })

  test('abajo de raton', () => {
    expect(canMouseEat('down', room2)).toBeFalsy()
  })

  test('a la derecha del raton', () => {
    expect(canMouseEat('right', room2)).toBeTruthy()
  })

  test('a la izquierda del raton', () => {
    expect(canMouseEat('left', room2)).toBeFalsy()
  })
})
