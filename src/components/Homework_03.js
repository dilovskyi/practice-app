//Проверка в каждом массиве
function arrayIsCorrert(arr) {
  if (!Array.isArray(arr)) {
    return 'Параметры переданы не корректно'
  } else if (arr.length < 1) {
    return 'Ваш массив пуст'
  }
  return 'OK'
}

// Заполните массив случайным образом нулями, единицами и двойками так, чтобы
// первая двойка в массиве встречалась раньше первой единицы,
// количество единиц было в точности равно суммарному количеству нулей и двоек.
// Придумайте правило генерации массива заданной длины. Определите, сгенерирован ли данный массив вашим правилом или нет.

function arrGenerator(arrLength) {
  let arr = []
  let iter = 0
  let zeroQuantity = 0
  let oneQuantity = 0
  let twoQuantity = 0
  let length = arrLength % 2 === 0 ? arrLength : arrLength + 1

  function generator() {
    if (iter === length) {
      return
    }

    iter++
    let num = Math.round(Math.random() * 2)

    // Формируем массив из 0 1 и 2 в случайном порядке. Соблюдая правило:
    // первая двойка в массиве встречалась раньше первой единицы.
    if (num === 0) {
      zeroQuantity += 1
    } else if (num === 1 && twoQuantity) {
      oneQuantity += 1
    } else if (num === 2) {
      twoQuantity += 1
    } else {
      iter--
      generator()
      return arr
    }
    arr.push(num)
    generator()
  }
  generator()
  return arr
}

function getIndexesOfNums(arr) {
  let zeroAndTwoIndexes = []
  let oneIndexes = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      oneIndexes.push(i)
    } else {
      zeroAndTwoIndexes.push(i)
    }
  }
  return {
    originArr: arr,
    oneIndexes,
    zeroAndTwoIndexes,
  }
}

function setEqualAmount({ originArr, oneIndexes, zeroAndTwoIndexes }) {
  const arr = originArr
  let oneQuantity = oneIndexes.length
  let zeroAndTwoQuantity = zeroAndTwoIndexes.length
  let ZeroOneorTwoIndex = null
  let indexInOrinin = null

  function quantityLoop() {
    if (oneQuantity === zeroAndTwoQuantity) {
      return arr
    } else if (oneQuantity < zeroAndTwoQuantity) {
      ZeroOneorTwoIndex = Math.round(Math.random() * (zeroAndTwoQuantity - 1))
      indexInOrinin = zeroAndTwoIndexes[ZeroOneorTwoIndex]
      arr[indexInOrinin] = 1
      oneQuantity += 1
      zeroAndTwoQuantity -= 1
    } else if (oneQuantity > zeroAndTwoQuantity) {
      let zeroOrTwo = [0, 2]
      ZeroOneorTwoIndex = Math.round(Math.random() * oneQuantity - 1)
      indexInOrinin = oneIndexes[ZeroOneorTwoIndex]
      arr[indexInOrinin] = zeroOrTwo[Math.round(Math.random())]
      zeroAndTwoQuantity += 1
      oneQuantity -= 1
    }
    quantityLoop()
  }
  quantityLoop()
  return arr
}

function fu1(arrLength) {
  let arr = arrGenerator(arrLength)
  let indexesObj = getIndexesOfNums(arr)
  return setEqualAmount(indexesObj)
}
fu1(11)

// Определить, содержит ли массив данное число x
function fu2(arr, x) {
  const arrCheck = arrayIsCorrert(arr)
  if (arrCheck !== 'OK' || typeof x !== 'number') {
    return arrCheck
  }

  let isNumberInArr = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      isNumberInArr = true
    }
  }
  return isNumberInArr
}

// Найти количество четных чисел в массиве.
function fu3(arr) {
  const arrCheck = arrayIsCorrert(arr)
  if (arrCheck !== 'OK') {
    return arrCheck
  }

  let doubleCounter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      doubleCounter += 1
    }
  }
  return doubleCounter
}

// Найти количество чисел в массиве, которые делятся на 3, но не делятся на 7.
function fu4(arr) {
  const arrCheck = arrayIsCorrert(arr)
  if (arrCheck !== 'OK') {
    return arrCheck
  }

  let numberCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 7 !== 0) {
      numberCount += 1
    }
  }
  return numberCount
}

// Определите, каких чисел в массиве больше: которые делятся на первый элемент массива или которые делятся на последний элемент массива.
function fu5(arr) {
  const arrCheck = arrayIsCorrert(arr)
  if (arrCheck !== 'OK') {
    return arrCheck
  }

  function checkNum(divider) {
    let numCounter = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % divider === 0) {
        numCounter += 1
      }
    }
    return numCounter
  }

  let firstNumCounter = checkNum(arr[0])
  let lastNumCounter = checkNum(arr[arr.length - 1])

  if (firstNumCounter > lastNumCounter) {
    return 'Больше чисел, которые делятся на первый элемент массива'
  } else if (firstNumCounter < lastNumCounter) {
    return 'Больше чисел, которые делятся на последний элемент массива'
  } else {
    return 'Чисел равное количество'
  }
}

// Найдите сумму и произведение элементов массива.
function fu6(arr) {
  const arrCheck = arrayIsCorrert(arr)
  if (arrCheck !== 'OK') {
    return arrCheck
  }

  let sum = 0
  let product = 1
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    product *= arr[i]
  }
  return [sum, product]
}

// Найдите сумму четных чисел массива.
function fu7(arr) {
  const arrCheck = arrayIsCorrert(arr)
  if (arrCheck !== 'OK') {
    return arrCheck
  }

  let numSum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      numSum += arr[i]
    }
  }
  return numSum
}

// Найдите сумму нечетных чисел массива, которые не превосходят 11.
function fu8(arr) {
  const arrCheck = arrayIsCorrert(arr)
  if (arrCheck !== 'OK') {
    return arrCheck
  }

  let numSum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 11 && arr[i] % 2 !== 0) {
      numSum += arr[i]
    }
  }
  return numSum
}

// Найдите сумму чисел массива, которые расположены до первого четного числа массива.Если четных чисел в массиве нет, то найти сумму всех чисел за исключением крайних.
function fu9(arr) {
  const arrCheck = arrayIsCorrert(arr)
  if (arrCheck !== 'OK') {
    return arrCheck
  }

  let numSum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return numSum
    }
    numSum += arr[i]
  }
  // Отнимаем сумму крайних элементов
  return numSum - arr[0] - arr[arr.length - 1]
}

// Найдите сумму чисел массива, которые стоят на четных местах.
function fu10(arr) {
  const arrCheck = arrayIsCorrert(arr)
  if (arrCheck !== 'OK') {
    return arrCheck
  }

  let numSum = 0
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && i !== 0) {
      numSum += arr[i]
    }
  }
  return numSum
}

// Найдите сумму чисел массива, которые стоят на нечетных местах и при этом превосходят сумму крайних элементов массива.
function fu11(arr) {
  const arrCheck = arrayIsCorrert(arr)
  if (arrCheck !== 'OK') {
    return arrCheck
  }

  let numSum = 0
  let outerNumSum = arr[0] + arr[arr.length - 1]
  for (let i = 0; i < arr.length; i++) {
    if ((i === 0 || i % 2 !== 0) && arr[i] > outerNumSum) {
      numSum += arr[i]
    }
  }
  return numSum
}

module.exports = {
  arrayIsCorrert,
  // fu1,
  fu2,
  fu3,
  fu4,
  fu5,
  fu6,
  fu7,
  fu8,
  fu9,
  fu10,
  fu11,
}
