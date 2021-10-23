//Вход: массив чисел. Выяснить, является ли последовательность этих чисел такой,
//в которой двузначные и трехзначные числа чередуются(идут последовательно, двузначные, трехзначные, двузначные и т.д.).
//Например, для последовательностей 34 678 12 897 23 или 674 12 567 43 ответ будет «Да».
function isTwoDigitAndThreeDigitAreInTurn(arr) {
  if (arr && arr.length > 1) {
    for (let j = 0; j < arr.length; j++) {
      //Получаем длину каждого значания
      let current = arr[j].toString().length;
      let prev = arr[j - 1] ? arr[j - 1].toString().length : null;

      // Обрабатываем на соответсвие длины 2-3 символа и длины "соседей"
      if (current < 2 || current > 3 || current === prev) {
        return false;
      }
    }
    return true;
  }
  return "The data is incorrect";
}

// Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
function zerroArrayOuterNumsIsOne(arrLength) {
  if (arrLength && arrLength > 1) {
    const arr = [];

    for (let i = 0; i < arrLength - 2; i++) {
      arr.push(0);
    }
    arr.unshift(1);
    arr.push(1);

    return arr;
  }
  return "The data is incorrect";
}

//Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.
function seriesOfZerosAndOnes(arrLength) {
  const arr = [];
  let num = null;
  if (arrLength) {
  }

  for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 0) {
      num = 0;
    } else {
      num = 1;
    }
    arr.push(num);
  }
  return arr;
}

// Заполнить массив последовательными нечетными числами, начиная с единицы.
function arrayOfOddNumbers(arrLength) {
  const arr = [];
  let counter = 1;

  for (let i = 0; i < arrLength; i++) {
    if (counter % 2 === 1) {
      arr.push(counter);
      i--;
    }
    counter++;
  }
  return arr;
}

// Сформировать массив из элементов арифметической прогрессии с заданным первым элементом x и разностью d.
// Чтобы найти последующий член прогрессии, нужно к предыдущему прибавить разность:
// a2 = a1 + d = 0 + 2 = 2;
// a3 = a2 + d = 2 + 2 = 4;
// a4 = a3 + d = 4 + 2 = 6;
// a5 = a4 + d = 6 + 2 = 8.
function arithmeticProgressionArr(arrLength, x, d) {
  const arr = [];
  let counter = x;

  for (let i = x; i < arrLength + x; i++) {
    arr.push(counter);
    counter += d;
  }

  return arr;
}

// Сформировать возрастающий массив из четных чисел.
function evenNumByIncreasing(arrLength) {
  const arr = [];
  let counter = 1;

  for (let i = 0; i <= arrLength; i++) {
    if (counter % 2 === 0) {
      arr.push(counter);
      i--;
    }
    counter++;
  }

  return arr;
}

// Сформировать убывающий массив из чисел, которые делятся на 3.
function numberDividedByThree(startNum) {
  const arr = [];

  for (let i = startNum; i > 0; i--) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

// Создать массив из n первых чисел Фибоначчи.
function fibArr(arrLength) {
  var arr = [0, 1];

  for (let i = 2; i < arrLength; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

export {
  isTwoDigitAndThreeDigitAreInTurn,
  zerroArrayOuterNumsIsOne,
  seriesOfZerosAndOnes,
  arrayOfOddNumbers,
  arithmeticProgressionArr,
  evenNumByIncreasing,
  numberDividedByThree,
  fibArr,
};
