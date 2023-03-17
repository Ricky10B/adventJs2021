const createXmasTree = require('./index')

test('arbol con altura 1', () => {
  expect(createXmasTree(1)).toBe('*\n#\n#')
})

test('arbol con altura 2', () => {
  expect(createXmasTree(2)).toBe('_*_\n***\n_#_\n_#_')
})

test('arbol con altura 3', () => {
  expect(createXmasTree(3)).toBe('__*__\n_***_\n*****\n__#__\n__#__')
})

test('arbol con altura 4', () => {
  expect(createXmasTree(4))
    .toBe('___*___\n__***__\n_*****_\n*******\n___#___\n___#___')
})

test('arbol con altura 5', () => {
  expect(createXmasTree(5))
    .toBe('____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____')
})
