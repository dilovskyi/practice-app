const {
  fu1,
  fu2,
  fu3,
  fu4,
  fu5,
  fu6,
  fu7,
  fu8,
  fu9,
} = require('../Homework_02')

describe('Массив натуральных чисел до 50', () => {
  const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
  it('Не совпадает', () => {
    expect(fu1()).toEqual(expected)
  })
})

describe('Массив длиною 10, каждый элемент которого равен квадрату своего номера.', () => {
  const expected = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
  it('Не совпадает', () => {
    expect(fu2()).toEqual(expected)
  })
})

describe('Массив длиною 10. На четных местах в котором стоят единицы\
"а на нечетных местах - числа, равные остатку от деления своего номера на 5.', () => {
  const expected = [1, 1, 1, 3, 1, 0, 1, 2, 1, 4]
  it('Не совпадает', () => {
    expect(fu3()).toEqual(expected)
  })
})

describe('Массив из трёх подряд идущих одинаковых элементов.Последний номер - 10', () => {
  const expected = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]
  it('Не совпадает', () => {
    expect(fu4()).toEqual(expected)
  })
})

describe('Массив - длина 10, который одинаково читается как слева направо, так и справа налево', () => {
  const expected = [0, 1, 2, 3, 4, 4, 3, 2, 1, 0]
  const fuResult = fu5()
  it('Не совпадает', () => {
    expect(fuResult).toEqual(expected)
  })
})

describe('Массив,длиною 10, имеет две единицы на случайных местах', () => {
  const expected = [1, 1]
  it('Не содержит достаточно количество единиц', () => {
    expect(fu6()).toEqual(expect.arrayContaining(expected))
  })
})

//Доделать
// describe('Нулей в массиве больше, чем единиц', () => {
//   const result = fu7()
//   console.log(result)
//   it('Не содержит достаточно количество единиц', () => {
//     expect(fu7()).toEqual(true)
//   })
// })

// describe('Сформировать массив из случайных целых чисел', () => {
//   it('Не содержит 1', () => {
//     expect(fu8()).not.toEqual(expect.arrayContaining([1]))
//   })
//   it('Не содержит двоек', () => {
//     expect(fu8()).toEqual(expect.arrayContaining([2]))
//   })
//   it('Не содержит троек', () => {
//     expect(fu8()).toEqual(expect.arrayContaining([3]))
//   })
// })
