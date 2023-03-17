const fixFiles = require('./index')

test('3 ficheros de photo', () => {
  const files = ['photo', 'postcard', 'photo', 'photo', 'video']
  expect(JSON.stringify(fixFiles(files))).toBe("[\"photo\",\"postcard\",\"photo(1)\",\"photo(2)\",\"video\"]")
})

test('3 ficheros de file y 2 game', () => {
  const files2 = ['file', 'file', 'file', 'game', 'game']
  expect(JSON.stringify(fixFiles(files2))).toBe("[\"file\",\"file(1)\",\"file(2)\",\"game\",\"game(1)\"]")
})

test('2 archivos icon(1)', () => {
  const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
  expect(JSON.stringify(fixFiles(files3))).toBe("[\"file\",\"file(1)\",\"icon\",\"icon(1)\",\"icon(1)(1)\"]")
})
