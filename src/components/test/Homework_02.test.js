// const {
//   fu1,
//   fu2,
//   fu3,
//   fu4,
//   fu5,
//   fu6,
//   fu7,
//   fu8,
//   fu9,
// } = require('../Homework_02')

it('adsfsadf', () => {})
// describe('Массив простых чисел', () => {
//   const arr = fu1()

//   it('Число натуральное', () => {
//     let expectedBool = true

//     function isPrime(num) {
//       for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//           return false
//         }
//       }
//       return true
//     }

//     for (let i = 0; i < arr.length; i++) {
//       if (!isPrime(arr[i])) {
//         expectedBool = false
//       }
//     }
//     expect(expectedBool).toBeTruthy()
//   })
// })
// // ----------------------------------------------------------------//
// describe('Массив чисел', () => {
//   const arr = fu2()
//   it('На четных местах стоят 1', () => {
//     expect(arr).toEqual(arr)
//   })
// })

// describe('Массив чисел []', () => {
//   const arr = fu3()

//   it('На четных индексах стоят 1', () => {
//     let expectedBool = true
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 === 0 && arr[i] !== 1) {
//         expectedBool = false
//       }
//     }
//     expect(expectedBool).toBeTruthy()
//   })

//   it('На нечетных индексах стоят числа, равные остатку от деления на 5', () => {
//     let expectedBool = true
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 !== 0 && arr[i] !== i % 5) {
//         expectedBool = false
//       }
//     }
//     expect(expectedBool).toBeTruthy()
//   })
// })

// describe('Массив из трёх подряд идущих одинаковых элементов', () => {
//   const arr = fu4()
//   let expectedBool = true

//   for (let i = 0; i < arr.length; i += 3) {
//     if (
//       arr[i] !== arr[i + 1] ||
//       arr[i] !== arr[i + 2] ||
//       arr[i + 1] !== arr[i + 2]
//     ) {
//       expectedBool = false
//     }
//   }
//   expect(expectedBool).toBeTruthy()
// })

// describe('Массив чисел - Палиндром', () => {
//   const arr = fu5()

//   it('Одиново читается с лева направо и справа налево', () => {
//     let expectedBool = true
//     // Можно идти до половины массива, но нужно решение с непарным индексом
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] !== arr[arr.length - i - 1]) {
//         expectedBool = false
//       }
//     }
//     expect(expectedBool).toBeTruthy()
//   })
// })

// describe('Массив случайных чисел', () => {
//   it('Имеет две единицы на случайных местах', () => {
//     expect(fu6().filter((item) => item === 1).length).toEqual(2)
//   })
// })

// describe('Массив из 0 и 1', () => {
//   const arr = fu7()

//   it('Единиц больше чем нулей', () => {
//     let expectedBool = true
//     let countOfZero = 0
//     let countOfOne = 0
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 0) {
//         countOfZero += 1
//       } else if (arr[i] === 1) {
//         countOfOne += 1
//       }
//     }
//     if (countOfOne < countOfZero) {
//       expectedBool = false
//     }
//     expect(expectedBool).toBeTruthy()
//   })
// })

// describe('Массив f8()', () => {})

// describe('Массив положительных и отрицательных чисел', () => {
//   const arr = fu9()

//   it('Равное количество положительных и отричательных чисел', () => {
//     let expectedBool = true
//     let positiveCount = 0
//     let negativeCount = 0

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         positiveCount += 1
//       } else {
//         negativeCount += 1
//       }
//       console.log(arr[i], positiveCount, negativeCount)
//     }
//     if (positiveCount !== negativeCount) {
//       expectedBool = true
//     }
//     expect(expectedBool).toBeTruthy()
//   })

//   it('Отрицательные числа расположены по убыванию', () => {
//     let expectedBool = true
//     let prevValue = 0

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < prevValue) {
//         prevValue = arr[i]
//       } else {
//         expectedBool = false
//         return
//       }
//     }
//     expect(expectedBool).toBeTruthy()
//   })
// })
