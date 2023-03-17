const pangram = require('./index')

test('frase de pangrama correcta', () => {
  expect(
    pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')
  ).toBeTruthy()
})

test('todas las letras en la carta', () => {
  expect(
    pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')
  ).toBeTruthy()
  
})

test('frase sin todas las letras del abecedario', () => {
  expect(
    pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')
  ).toBeFalsy()
})

test('faltan letras en la oracion', () => {
  expect(
    pangram('De la a a la z, nos faltan letras')
  ).toBeFalsy()
})
