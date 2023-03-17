const listGifts = require("./index.js");

test('le pasamos un string vacio', () => {
  expect(listGifts("")).toEqual({});
});

test('regalos arreglados y filtrados', () => {
  const carta = 'bici coche balón _playstation bici coche peluche';
  const regalos = listGifts(carta);
  expect(regalos).toEqual(
    {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1
    }
  );
});

test('mas espacios vacios', () => {
  const carta = '    bici   coche  _playstation     bici _coche peluche     ';
  const regalos = listGifts(carta);
  expect(regalos).toEqual(
    {
      bici: 2,
      coche: 1,
      peluche: 1
    }
  );
});

test('un solo regalo', () => {
  const carta = '     peluche     ';
  const regalos = listGifts(carta);
  expect(regalos).toEqual(
    {
      peluche: 1
    }
  );
});
