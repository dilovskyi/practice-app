//Вход: массив чисел. Выяснить, является ли последовательность этих чисел такой,
//в которой двузначные и трехзначные числа чередуются(идут последовательно, двузначные, трехзначные, двузначные и т.д.).
//Например, для последовательностей 34 678 12 897 23 или 674 12 567 43 ответ будет «Да».
export function checkNumbers(arr) {
  const numbersLengthArr = arr.map((item) => {
    return item.toString().length
  })

  const alternatingArr = numbersLengthArr.filter((item, index) => {
    if (item !== numbersLengthArr[index - 1]) {
      return item
    }
  })

  if (alternatingArr.length === numbersLengthArr.length) {
    console.log('да')
    return 'Да'
  } else {
    console.log('Нет')
    return 'Нет'
  }
}
checkNumbers([34, 678, 12, 897, 233])

// Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
export function fillArrayByZero(arrLength = 10) {
  const arr = []

  for (let i = 0; i <= arrLength; i++) {
    if (i === 0 || i === arrLength) {
      arr[i] = 1
    } else {
      arr[i] = 0
    }
  }

  console.log(arr)
  return arr
}
// fillArrayByZero(10)

//Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.
export function fillByZeroOrOne(arrLength) {
  const arr = []

  for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 0) {
      arr[i] = 0
    } else {
      arr[i] = 1
    }
  }

  console.log(arr)
  return arr
}
// fillByZeroOrOne(10)

//Заполнить массив последовательными нечетными числами, начиная с единицы.
export function fillByOddNumberd(arrLength) {
  const arr = []

  for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 1) {
      arr[arr.length] = i
    }
  }

  console.log(arr)
  return arr
}
// fillByOddNumberd(100)

// Сформировать массив из элементов арифметической прогрессии с заданным первым элементом x и разностью d.
export function arithmeticProgression(x, d, arrLength) {
  const arr = [x]

  for (let i = 1; i < arrLength; i++) {
    arr[i] = arr[arr.length - 1] + d
  }

  console.log(arr)
  return arr
}
// arithmeticProgression(2, 5)

// Сформировать возрастающий массив из четных чисел.
export function arrOfEvenNum(arrLength) {
  const arr = []

  for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 0 && i !== 0) {
      arr[arr.length] = i
    }
  }

  console.log(arr)
  return arr
}
// arrOfEvenNum(100)

//Сформировать убывающий массив из чисел, которые делятся на 3.
export function subtrahendArr(arrLength) {
  const arr = []

  for (let i = arrLength; i > 0; i--) {
    if (i % 3 === 0 && i !== 0) {
      arr[arr.length] = i
    }
  }

  console.log(arr)
  return arr
}
// subtrahendArr(100)

// Создать массив из n первых чисел Фибоначчи.
export function fibArr(n) {
  var fibArr = [0, 1]

  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
  }

  console.log(fibArr)
  return fibArr
}
// fibArr(77)
