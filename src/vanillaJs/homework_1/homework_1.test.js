import {
  isTwoDigitAndThreeDigitAreInTurn,
  zerroArrayOuterNumsIsOne,
  seriesOfZerosAndOnes,
  arrayOfOddNumbers,
  arithmeticProgressionArr,
  evenNumByIncreasing,
  numberDividedByThree,
  fibArr,
} from "./homework_1";

describe("Array of two-digit and three-digit numbers", () => {
  it("Two-digit and three-digit numbers run consecutively", () => {
    expect(isTwoDigitAndThreeDigitAreInTurn([22, 333])).toBeTruthy();
    expect(isTwoDigitAndThreeDigitAreInTurn([333, 33])).toBeTruthy();
  });
  it("In the array only two-digit and three-digit numbers", () => {
    expect(isTwoDigitAndThreeDigitAreInTurn([23, 1111])).not.toBeTruthy();
    expect(isTwoDigitAndThreeDigitAreInTurn([1, 333])).not.toBeTruthy();
  });
});

describe("Array of 0. 1 in beginning and end", () => {
  it("The array only contains 0 and 1", () => {
    expect(
      zerroArrayOuterNumsIsOne(10).filter((item) => item !== 0 && item !== 1)
    ).toEqual([]);
  });
  it("Value of first element = 1", () => {
    expect(zerroArrayOuterNumsIsOne(10)[0]).toEqual(1);
  });
  it("Value of last element = 1", () => {
    expect(zerroArrayOuterNumsIsOne(10)[9]).toEqual(1);
  });
});

describe("Series of zeros and ones", () => {
  it("The array only contains 0 and 1", () => {
    expect(
      seriesOfZerosAndOnes(10).filter((item) => item !== 0 && item !== 1)
    ).toEqual([]);
  });
  it("Values are arranged consecutively", () => {
    expect(seriesOfZerosAndOnes(10)).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);
  });
});

it("Array of even numbers", () => {
  expect(arrayOfOddNumbers(5)).toEqual([1, 3, 5, 7, 9]);
});

it("Array of elements of arithmetic progression", () => {
  expect(arithmeticProgressionArr(5, 2, 10)).toEqual([5, 7, 9, 11, 13]);
});

it("Even number array by increasing", () => {
  expect(evenNumByIncreasing(5)).toEqual([2, 4, 6, 8, 10]);
});

it("Numbers in descending order, which are divided by 3", () => {
  expect(numberDividedByThree(10)).toEqual([9, 6, 3]);
});

it("Fibonacci number array", () => {
  expect(fibArr(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
