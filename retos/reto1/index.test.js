const contarOvejas = require('./index.js');

test('es un array', () => {
  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  const ovejasFiltradas = contarOvejas(ovejas);

  expect(Array.isArray(ovejasFiltradas)).toBeTruthy();
});

test('arreglo vacio', () => {
  const ovejasFiltradas = contarOvejas([]);

  expect(ovejasFiltradas).toEqual([]);
});

test('no hay ovejas rojas', () => {
  const ovejas = [
    { name: 'Noa', color: 'azul' }
  ]
  const ovejasFiltradas = contarOvejas(ovejas);

  expect(ovejasFiltradas).toHaveLength(0);
});

test('no hay ovejas rojas y con nombre que incluyan las letras n y a', () => {
  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  const ovejasFiltradas = contarOvejas(ovejas);

  expect(ovejasFiltradas).toHaveLength(0);
});
