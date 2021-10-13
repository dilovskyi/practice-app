//Сделать сортировку без метода сорт
function SelectionSort(arr) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    var t = arr[min];
    arr[min] = arr[i];
    arr[i] = t;
  }
  return arr;
}

// Заполнить массив заданной длины различными простыми числами.
// Натуральное число, большее единицы, называется простым, если оно делится только на себя и на единицу.
function arrOfPrimeNumbers(arrLength) {
  const arr = [];

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i < arrLength; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  return arr;
}

// Создать массив, каждый элемент которого равен квадрату своего номера.
function arrOfnumsWhitchIsSquareOfIndex(arrLength) {
  let arr = [];

  for (let i = 1; i <= arrLength; i++) {
    arr.push((i - 1) ** [i]);
  }

  return arr;
}

// Создать массив, на четных местах в котором стоят единицы,
// а на нечетных местах - числа, равные остатку от деления своего номера на 5.
function evenIsOneAndOddIsRemainderOfTheDivisionByFive(arrLength) {
  const arr = [];

  for (let i = 0; i < arrLength; i++) {
    let num;
    if (i % 2 === 0 && i !== 0) {
      num = 1;
    } else {
      num = i % 5;
    }
    arr.push(num);
  }
  return arr;
}

// Создать массив, состоящий из трёх подряд идущих одинаковых элементов.
function threeTimesSameNum(lastNumber) {
  const arr = [];
  let numCount = 0;

  for (let i = 0; i <= lastNumber; i++) {
    if (numCount < 3) {
      arr.push(i);
      numCount++;
      i--;
    } else if (numCount >= 3) {
      numCount = 0;
    }
  }

  return arr;
}

// Создать массив, который одинаково читается как слева направо, так и справа налево.
function palindromeArray(arrLength) {
  const arr = [];
  const arrMid = Math.round(arrLength / 2);

  for (let i = 0; i < arrLength + 1; i++) {
    if (i < arrMid) {
      arr.push(i);
    } else if (i > arrMid) {
      arr.push(arrLength - i);
    }
  }

  return arr;
}

// Сформировать массив из случайных чисел, в которых ровно две единицы, стоящие на случайных позициях.
function twoUnitsOnRandomIndexes(arrLength) {
  const arr = [];
  let indexOfOne = null;

  for (let i = 0; i < arrLength; i++) {
    const randomNum = Math.floor(Math.random() * 100);

    if (randomNum === 1) {
      i--;
      continue;
    }

    arr.push(randomNum);
  }

  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * arrLength);

    if (indexOfOne === randomIndex) {
      i--;
      continue;
    }

    arr.splice(randomIndex, 1, 1);
    indexOfOne = randomIndex;
  }

  return arr;
}

// Заполните массив случайным образом нулями и единицами так, чтобы количество единиц было больше количества нулей.
function unitsMoreNudOnRandomIndexes(arrLength) {
  const arr = [];
  let countOfZero = 0;
  let countOfOne = 0;

  for (let i = 0; i < arrLength; i++) {
    const randomNum = Math.round(Math.random());

    if (randomNum === 0) {
      countOfZero++;
    } else if (randomNum === 1) {
      countOfOne++;
    }
    arr.push(randomNum);
  }

  function checkCountOfOne() {
    if (countOfZero >= countOfOne) {
      arr[Math.floor(Math.random() * (arrLength - 1))] = 1;
      countOfOne++;
      checkCountOfOne();
    } else {
      return;
    }
  }
  checkCountOfOne();

  return arr;
}

// Сформировать массив из случайных целых чисел от 0 до 9 , в котором единиц от 3 до 5 и двоек больше троек.
function arrToNineWithFixedAmount(arrLength) {
  const arr = [];
  let countOfOne = 0;
  let countOfTwo = 0;
  let countOfThree = 0;

  for (let i = 0; i < arrLength; i++) {
    const randomNum = Math.floor(Math.random() * (9 - 0 + 1));

    if (randomNum === 1) {
      if (countOfOne >= 5) {
        i--;
        continue;
      }
      countOfOne++;
    } else if (randomNum === 2) {
      countOfTwo++;
    } else if (randomNum === 3) {
      if (countOfThree + 1 >= countOfTwo) {
        i--;
        continue;
      }
      countOfThree++;
    }

    arr.push(randomNum);
  }

  function checkCountOfOne() {
    if (++countOfOne < 3) {
      arr[Math.floor(Math.random() * (arrLength - 1))] = 1;
      checkCountOfOne();
    } else {
      return;
    }
  }
  checkCountOfOne();

  return arr;
}

// Создайте массив, в котором количество отрицательных чисел равно количеству положительных
// и положительные числа расположены на случайных местах в массиве.
function oddAndEvenQuantityIsEqual(maxNumber) {
  const mainArr = [];
  const onlyPositive = [];

  // Само округляет деление
  // Заполнили массив
  for (let i = 1; i <= maxNumber; i++) {
    mainArr.push(i);
    mainArr.push(i * -1);
  }
  // Забрали положительные в другой массив
  // Заменили на пустую строку
  for (let i = 0; i < mainArr.length; i++) {
    if (mainArr[i] > 0) {
      onlyPositive.push(mainArr[i]);
      mainArr[i] = "";
    }
  }

  // Рандомная сортировка
  for (let i = onlyPositive.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = onlyPositive[j];
    onlyPositive[j] = onlyPositive[i];
    onlyPositive[i] = temp;
  }

  // Вставка в исходных массив
  for (let i = 0; i < onlyPositive.length; i++) {
    for (let j = 0; j < mainArr.length; j++) {
      if (mainArr[j] === "") {
        mainArr[j] = onlyPositive[i];
        break;
      }
    }
  }

  return mainArr;
}

export {
  arrOfPrimeNumbers,
  arrOfnumsWhitchIsSquareOfIndex,
  evenIsOneAndOddIsRemainderOfTheDivisionByFive,
  threeTimesSameNum,
  palindromeArray,
  twoUnitsOnRandomIndexes,
  unitsMoreNudOnRandomIndexes,
  arrToNineWithFixedAmount,
  oddAndEvenQuantityIsEqual,
};
