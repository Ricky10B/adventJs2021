const countPackages = require('./index')

test('3 transportistas con sus paquetes', () => {
  const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
  ]
  
  expect(countPackages(carriers, 'dapelu')).toBe(9)
})

test('5 transportistas con sus paquetes', () => {
  const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
  ]
  
  expect(countPackages(carriers2, 'camila')).toBe(15)
})
