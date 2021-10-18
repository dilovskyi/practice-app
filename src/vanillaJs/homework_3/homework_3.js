//Проверка в каждом массиве
// function arrayIsCorrert(arr) {
//   if (!Array.isArray(arr)) {
//     return "Параметры переданы не корректно";
//   } else if (arr.length < 1) {
//     return "Ваш массив пуст";
//   }
//   return "OK";
// }

// Заполните массив случайным образом нулями, единицами и двойками так, чтобы
// первая двойка в массиве встречалась раньше первой единицы,
// количество единиц было в точности равно суммарному количеству нулей и двоек.
// Придумайте правило генерации массива заданной длины. Определите, сгенерирован ли данный массив вашим правилом или нет.
function arrGenerator(arrLength) {
  let arr = [];
  let iter = 0;
  let zeroQuantity = 0;
  let oneQuantity = 0;
  let twoQuantity = 0;
  let length = arrLength % 2 === 0 ? arrLength : arrLength + 1;

  function addNumInArr() {
    if (iter === length) {
      return;
    }

    iter++;
    let num = Math.floor(Math.random() * 3);

    // Формируем массив из 0 1 и 2 в случайном порядке. Соблюдая правило:
    // первая двойка в массиве встречалась раньше первой единицы.
    if (num === 0) {
      zeroQuantity += 1;
    } else if (num === 1 && twoQuantity) {
      oneQuantity += 1;
    } else if (num === 2) {
      twoQuantity += 1;
    } else {
      iter--;
      addNumInArr();
      return arr;
    }
    arr.push(num);
    addNumInArr();
  }
  addNumInArr();
  return arr;
}

function setEqualAmount(arr) {
  //Get index of first number two
  const firstTwoIndex = arr.indexOf(2);
  let indexInOrigin = 0;

  function quantityLoop() {
    let oneQuantity = 0;
    let zeroAndTwoQuantity = 0;
    // check number count
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        oneQuantity += 1;
      } else if (arr[i] !== 1) {
        zeroAndTwoQuantity += 1;
      }
    }
    //find nearest element and replace values
    if (oneQuantity === zeroAndTwoQuantity) {
      return arr;
    } else if (oneQuantity < zeroAndTwoQuantity) {
      indexInOrigin = arr.findIndex(
        (item, index) => item !== 1 && index > firstTwoIndex
      );
      arr[indexInOrigin] = 1;
    } else if (oneQuantity > zeroAndTwoQuantity) {
      indexInOrigin = arr.findIndex((item) => item === 1);
      let zeroOrTwo = [0, 2];
      arr[indexInOrigin] = zeroOrTwo[Math.round(Math.random())];
    }
    quantityLoop();
  }
  quantityLoop();
  return arr;
}

function arrWithEqualQuantityOfTwoPlusZeroToOne(
  arrLength,
  arrGenerator,
  getIndexesOfNums,
  setEqualAmount
) {
  let arr = arrGenerator(arrLength);
  return setEqualAmount(arr);
}

// Определить, содержит ли массив данное число x
function isNumInArr(arr, x) {
  let booleanFlag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      booleanFlag = true;
      break;
    }
  }
  return booleanFlag;
}

// Найти количество четных чисел в массиве.
function quantityOfEvenNums(arr) {
  let doubleCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      doubleCounter += 1;
    }
  }
  return doubleCounter;
}

// Найти количество чисел в массиве, которые делятся на 3, но не делятся на 7.
function quantityOfNumsDivisibleByThreeButNotBySeven(arr) {
  let numberCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 7 !== 0) {
      numberCount += 1;
    }
  }
  return numberCount;
}

// Определите, каких чисел в массиве больше: которые делятся на первый элемент массива или которые делятся на последний элемент массива.
function divisibleByFirstElementOrLastWhitchMore(arr) {
  function checkNum(divider) {
    let numCounter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % divider === 0) {
        numCounter += 1;
      }
    }
    return numCounter;
  }

  let firstNumCounter = checkNum(arr[0]);
  let lastNumCounter = checkNum(arr[arr.length - 1]);

  if (firstNumCounter > lastNumCounter) {
    return "first is more";
  } else if (firstNumCounter < lastNumCounter) {
    return "last is more";
  } else {
    return "equally";
  }
}

// Найдите сумму и произведение элементов массива.
function sumAndProductOfNumsInArr(arr) {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }
  return [sum, product];
}

// Найдите сумму четных чисел массива.
function sumOfEvenNumsInArr(arr) {
  let numSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      numSum += arr[i];
    }
  }
  return numSum;
}

// Найдите сумму нечетных чисел массива, которые не превосходят 11.
function sumOfOddNumsLessThanEleven(arr) {
  let numSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 11 && arr[i] % 2 !== 0) {
      numSum += arr[i];
    }
  }
  return numSum;
}

// Найдите сумму чисел массива, которые расположены до первого четного числа массива.Если четных чисел в массиве нет, то найти сумму всех чисел за исключением крайних.
function sumOfNumsBeforeEvenNum(arr) {
  let numSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return numSum;
    }
    numSum += arr[i];
  }
  // Отнимаем сумму крайних элементов
  return numSum - arr[0] - arr[arr.length - 1];
}

// Найдите сумму чисел массива, которые стоят на четных местах.
function sumOfNumsOnEvenIndexes(arr) {
  let numSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && i !== 0) {
      numSum += arr[i];
    }
  }
  return numSum;
}

// Найдите сумму чисел массива, которые стоят на нечетных местах и при этом превосходят сумму крайних элементов массива.
function sumOfNumsOnOddIndexesAndBiggerThanSumOfOuterElems(arr) {
  let numSum = 0;
  let outerNumSum = arr[0] + arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    if ((i === 0 || i % 2 !== 0) && arr[i] > outerNumSum) {
      numSum += arr[i];
    }
  }
  return numSum;
}

export {
  arrGenerator,
  setEqualAmount,
  arrWithEqualQuantityOfTwoPlusZeroToOne,
  isNumInArr,
  quantityOfEvenNums,
  quantityOfNumsDivisibleByThreeButNotBySeven,
  divisibleByFirstElementOrLastWhitchMore,
  sumAndProductOfNumsInArr,
  sumOfEvenNumsInArr,
  sumOfOddNumsLessThanEleven,
  sumOfNumsBeforeEvenNum,
  sumOfNumsOnEvenIndexes,
  sumOfNumsOnOddIndexesAndBiggerThanSumOfOuterElems,
};
