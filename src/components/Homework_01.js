//Вход: массив чисел. Выяснить, является ли последовательность этих чисел такой,
//в которой двузначные и трехзначные числа чередуются(идут последовательно, двузначные, трехзначные, двузначные и т.д.).
//Например, для последовательностей 34 678 12 897 23 или 674 12 567 43 ответ будет «Да».
function fu1(arr = [34, 678, 12, 897, 23]) {
  for (let j = 0; j < arr.length; j++) {
    let current = +arr[j].toString().length
    let prev = arr[j - 1] ? +arr[j - 1].toString().length : null

    if (current < 2 || current > 3) {
      return 'Heт'
    }

    if (current === prev) {
      return 'Heт'
    }
  }
  return 'Да'
}
fu1()

// Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
function fu2(arrLength = 10) {
  const arr = []

  for (let i = 0; i < arrLength - 2; i++) {
    arr.push(0)
  }
  arr.push(1)
  arr.unshift(1)

  return arr
}
fu2()

//Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.
function fu3(arrLength = 10) {
  const arr = []
  let num = null

  for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 0) {
      num = 0
    } else {
      num = 1
    }
    arr.push(num)
  }
  return arr
}
fu3()

// Заполнить массив последовательными нечетными числами, начиная с единицы.
const fu4 = function (arrLength = 10) {
  const arr = []
  let counter = 0

  for (let i = 0; i < arrLength; i++) {
    if (counter % 2 === 1) {
      arr.push(counter)
      i--
    }
    counter++
  }

  return arr
}
fu4()

// Сформировать массив из элементов арифметической прогрессии с заданным первым элементом x и разностью d.
// Чтобы найти последующий член прогрессии, нужно к предыдущему прибавить разность:
// a2 = a1 + d = 0 + 2 = 2;
// a3 = a2 + d = 2 + 2 = 4;
// a4 = a3 + d = 4 + 2 = 6;
// a5 = a4 + d = 6 + 2 = 8.
const fu5 = function (x = 0, d = 2, arrLength = 10) {
  const arr = []
  let counter = 0

  for (let i = x; i < arrLength; i++) {
    arr.push(counter)
    counter += d
  }

  return arr
}
fu5()

// Сформировать возрастающий массив из четных чисел.
const fu6 = function (arrLength = 10) {
  const arr = []
  let counter = 1

  for (let i = 0; i <= arrLength; i++) {
    if (counter % 2 === 0) {
      arr.push(counter)
      i--
    }
    counter++
  }

  return arr
}
fu6()

// Сформировать убывающий массив из чисел, которые делятся на 3.
const fu7 = function (startNum = 20) {
  const arr = []

  for (let i = startNum; i > 0; i--) {
    if (i % 3 === 0) {
      arr.push(i)
    }
  }
  return arr
}
fu7()

// Создать массив из n первых чисел Фибоначчи.
const fu8 = function (n = 10) {
  var fibArr = [0, 1]

  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
  }

  return fibArr
}
fu8()

module.exports = { fu1, fu2, fu3, fu4, fu5, fu6, fu7, fu8 }
