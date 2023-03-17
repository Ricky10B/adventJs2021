const wrapGifts = require('./index')

test('envolver 1 regalo por string', () => {
  expect(JSON.stringify(wrapGifts(["📷", "⚽️"])))
    .toBe(
      "[\"****\",\"*📷*\",\"*⚽️*\",\"****\"]"
    )
})

test('envolver 2 regalos por string', () => {
  expect(JSON.stringify(wrapGifts(["🏈🎸", "🎮🧸"])))
    .toBe(
      "[\"******\",\"*🏈🎸*\",\"*🎮🧸*\",\"******\"]"
    )
})

test('envolver 1 regalo', () => {
  expect(JSON.stringify(wrapGifts(["📷"])))
    .toBe(
      "[\"****\",\"*📷*\",\"****\"]"
    )
})
