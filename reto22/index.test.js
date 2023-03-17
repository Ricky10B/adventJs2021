const countDecorations = require('./index')

test('6 decoraciones faltantes', () => {
  const tree = {
    value: 1,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 3,
      left: null,
      right: null
    }
  }

  expect(
    countDecorations(tree)
  ).toBe(6)
})

test('28 decoraciones faltantes', () => {
  const bigTree = {
    value: 1,
    left: {
      value: 5,
      left: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: null
      },
      right: null
    },
    right: {
      value: 6,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: {
        value: 1,
        left: null,
        right: null
      }
    }
  }

  expect(
    countDecorations(bigTree)
  ).toBe(28)
})
