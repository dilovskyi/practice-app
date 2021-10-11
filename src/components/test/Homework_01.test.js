const { fu1, fu2, fu3, fu4, fu5, fu6, fu7, fu8 } = require('../Homework_01')

// describe('Массив двузначных и трёхзначных чисел', () => {
//   it('Массив существует', () => {
//     expect(fu1()).toMatch('Данные указаны не верно')
//   })
//   it('Длина массива больше 1', () => {
//     expect(fu1([])).toMatch('Данные указаны не верно')
//     expect(fu1([12])).toMatch('Данные указаны не верно')
//   })
//   it('Двузначные и трёхзначные числа идут последовательно?', () => {
//     expect(fu1([22, 333])).toMatch('Да')
//     expect(fu1([333, 33])).toMatch('Да')
//   })
//   it('В массиве только двузначные и трехзначные числа', () => {
//     expect(fu1([23, 1111])).toMatch('Нет')
//     expect(fu1([1, 333])).toMatch('Нет')
//   })
// })

// describe('Массив из 0. 1 в начале и конце', () => {
//   it('Длина массива больше 1', () => {
//     expect(fu2()).toMatch('Данные указаны не верно')
//     expect(fu2(1)).toMatch('Данные указаны не верно')
//   })
//   it('Массив содержить только 0 и 1', () => {
//     expect(fu2(10)).toEqual(expect.arrayContaining([1, 1]))
//   })
//   it('Значение первого элемента = 1', () => {
//     expect(fu2(10)[0]).toEqual(1)
//   })
//   it('Значение последнего элемента = 1', () => {
//     expect(fu2(10)[9]).toEqual(1)
//   })
// })

describe('Массив из 0 и 1.', () => {
  it('Массив содержить только 0 и 1', () => {
    expect(fu2(10)).toEqual(expect.arrayContaining([0, 1]))
  })
  it('Значение последнего элемента = 0', () => {
    expect(fu3(10)[0]).toEqual(0)
  })
  it('Значение 1 расположенно на непарных индексах', () => {
    expect(fu3(10)).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
  })
  it('Число 0 разположено только на парных индексах', () => {})
})

// describe('Массив нечетных чисел', () => {
//   const expectedArr = fu4()

//   it('Первый элемент = 1', () => {
//     expect(expectedArr[0]).toEqual(1)
//   })

//   it('В массиве нет четных чисел', () => {
//     let expectedBool = true

//     for (let i = 0; i < expectedArr.length; i++) {
//       if (expectedArr[i] % 2 === 0) {
//         expectedBool = false
//         return
//       }
//     }
//     expect(fu4()).toBe([1, 0, 1, 0, 1, 0, 1])
//   })
// })

// describe('Массив из элементов арифметической прогрессии', () => {
//   const expectedArr = fu5()

//   it('Разность елементов соблюдена', () => {
//     let expectedBool = true

//     let d = expectedArr[1] - expectedArr[0]
//     let prevValue = [0]
//     for (let i = 1; i < expectedArr.length; i++) {
//       if (expectedArr[i] - prevValue !== d) {
//         expectedBool = false
//         return
//       }
//       prevValue = expectedArr[i]
//     }
//     expect(expectedBool).toBeTruthy()
//   })
// })

// describe('Массив парных чисел по возрастающей', () => {
//   const expectedArr = fu6()

//   it('Все числа парные', () => {
//     let expectedBool = true
//     for (let i = 0; i < expectedArr.length; i++) {
//       if (expectedArr[i] % 2 !== 0) {
//         expectedBool = false
//       }
//     }
//     expect(expectedBool).toBeTruthy()
//   })
//   it('Числа по возрастающей', () => {
//     let expectedBool = true
//     let prevValue = [0]
//     for (let i = 1; i < expectedArr.length; i++) {
//       if (expectedArr[i] <= prevValue) {
//         expectedBool = false
//         return
//       }
//       prevValue = expectedArr[i]
//     }
//     expect(expectedBool).toBeTruthy()
//   })
// })

// describe('Массив чисел по убыванию, которые делятся на 3', () => {
//   const expectedArr = fu7()

//   it('Числа по убыванию', () => {
//     let expectedBool = true
//     let prevValue = expectedArr[0]
//     for (let i = 1; i < expectedArr.length; i++) {
//       if (prevValue <= expectedArr[i]) {
//         expectedBool = false
//         return
//       }
//       prevValue = expectedArr[i]
//     }
//     expect(expectedBool).toBeTruthy()
//   })

//   it('Числа делятся на 3', () => {
//     let expectedBool = true
//     for (let i = 0; i < expectedArr.length; i++) {
//       if (expectedArr[i] % 3 !== 0) {
//         console.log('fail')
//         expectedBool = false
//       }
//     }
//     expect(expectedBool).toBeTruthy()
//   })
// })

// //Обратить внимание
// describe('Массив чисел Фибоначчи', () => {
//   const expectedArr = fu8()

//   it('Последовательность соблюдена', () => {
//     let expectedBool = true
//     for (let i = 2; i < expectedArr.length; i++) {
//       if (expectedArr[i] !== expectedArr[i - 1] + expectedArr[i - 2]) {
//         expectedBool = false
//         return
//       }
//     }
//     expect(expectedBool).toBeTruthy()
//   })
// })
