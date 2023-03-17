const contains = require('./index')

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

const almacenVacio = {}

test('existe el producto en el almacen', () => {
  expect(contains(almacen, 'camiseta')).toBeTruthy()
})

test('no existe el producto en el almacen', () => {
  expect(contains(otroAlmacen, 'camiseta')).toBeFalsy()
})

test('Almacen vacío', () => {
  expect(contains(almacenVacio, 'camiseta')).toBeFalsy()
})
