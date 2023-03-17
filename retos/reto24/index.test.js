const checkIsSameTree = require('./index')

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

const tree3 = {
  value: 1,
  left: { value: 5, left: { value: 7, left: null, right: null }, right: null },
  right: { value: 3, left: null, right: { value: 4, left: null, right: null } }
}

test('arboles pequeños iguales', () => {
  expect(
    checkIsSameTree(tree, tree)
  ).toBeTruthy()
})

test('arboles grandes iguales', () => {  
  expect(
    checkIsSameTree(tree2, tree2)
    ).toBeTruthy()
})

test('arbol grande y arbol pequeño no son iguales', () => {
  expect(
    checkIsSameTree(tree, tree2)
  ).toBeFalsy()
})

test('arboles grandes diferentes', () => {  
  expect(
    checkIsSameTree(tree2, tree3)
  ).toBeFalsy()
})
