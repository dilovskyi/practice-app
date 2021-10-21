import {
  arrOfPrimeNumbers,
  arrOfnumsWhitchIsSquareOfIndex,
  evenIsOneAndOddIsRemainderOfTheDivisionByFive,
  threeTimesSameNum,
  palindromeArray,
  twoUnitsOnRandomIndexes,
  zerosLessThenOnes,
  arrToNineWithFixedAmount,
  oddAndEvenQuantityIsEqual,
} from "./homework_2";
it("adsfsadf", () => {});

it("Arr of nrime numbers", () => {
  expect(arrOfPrimeNumbers(50)).toEqual([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
  ]);
});

it("Element is equal to the square of its number", () => {
  expect(arrOfnumsWhitchIsSquareOfIndex(5)).toEqual([0, 1, 8, 81, 1024]);
});

it("Even elem is - 1 and odd - numbers equal to the remainder of dividing their number by 5.", () => {
  expect(evenIsOneAndOddIsRemainderOfTheDivisionByFive(5)).toEqual([
    0, 1, 1, 3, 1,
  ]);
});

it("Numbers are duplicated three times", () => {
  expect(threeTimesSameNum(5)).toEqual([
    0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5,
  ]);
});

it("The numbers are the same from left to right and from right to left", () => {
  expect(palindromeArray(10)).toEqual([0, 1, 2, 3, 4, 4, 3, 2, 1, 0]);
  expect(palindromeArray(11)).toEqual([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]);
});

it("Two units on the random positions", () => {
  expect(twoUnitsOnRandomIndexes(5).filter((item) => item === 1).length).toBe(
    2
  );
});

it("0 in the array is less than", () => {
  zerosLessThenOnes();
});

describe("Arr of random integers from 0 to 9 , in which units from 3 to 5 and deuce are greater than triples.", () => {
  it("Return array", () => {
    expect(arrToNineWithFixedAmount(10)).toEqual(expect.any(Array));
  });
});

it("Equal number of positive and negative numbers", () => {
  expect(
    oddAndEvenQuantityIsEqual(5).sort(function (a, b) {
      return a - b;
    })
  ).toEqual([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);
});
