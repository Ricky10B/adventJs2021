const learn = require('./index')

test('Con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.', () => {
  expect(JSON.stringify(learn(10, [2, 3, 8, 1, 4]))).toBe("[0,2]")
})

test('Los cursos en [1, 2] son 14 horas, es la mejor opción.', () => {
  expect(JSON.stringify(learn(15, [2, 10, 4, 1]))).toBe("[1,2]")
})

test('los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos', () => {
  expect(JSON.stringify(learn(25, [10, 15, 20, 5]))).toBe("[0,1]")
})

test('para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.', () => {
  expect(JSON.stringify(learn(8, [8, 2, 1]))).toBe("[1,2]")
})

test('usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.', () => {
  expect(JSON.stringify(learn(8, [8, 2, 1, 4, 3]))).toBe("[3,4]")
})

test('no nos da tiempo a hacer dos cursos', () => {
  expect(learn(4, [10, 14, 20])).toBeNull()
})

test('no nos da tiempo a hacer dos cursos', () => {
  expect(learn(5, [5, 5, 5])).toBeNull()
})
