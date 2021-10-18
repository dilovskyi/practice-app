import {
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
} from "./homework_3";

describe("Generate arr with equal quantity of two plus zero to one", () => {
  it("Two is located in front of one", () => {
    let arr;
    let flag = true;

    for (let i = 0; i <= 100; i++) {
      arr = arrGenerator(10);

      if (arr.indexOf(1) !== -1 && arr.indexOf(1) < arr.indexOf(2)) {
        flag = false;
        break;
      }
    }
    expect(flag).toBeTruthy();
  });

  it("Set equal amount", () => {
    const result = setEqualAmount([0, 0, 2, 1, 0, 0]);
    let twoAndZeroCount = result.filter((item) => item !== 1).length;
    let oneCount = result.filter((item) => item === 1).length;
    expect(twoAndZeroCount === oneCount).toBeTruthy();
  });
});

describe("Find a number in an array", () => {
  it("Number omits", () => {
    expect(isNumInArr([3, 5], 2)).not.toBeTruthy();
  });
  it("Number present", () => {
    expect(isNumInArr([2, 3, 4], 2)).toBeTruthy();
  });
});

it("Quantity of even numbers in an array", () => {
  expect(quantityOfEvenNums([2, 4, 6, 1, 3, 5])).toBe(3);
  expect(quantityOfEvenNums([1, 3, 5])).toBe(0);
});

it("Quantity of numbers that are divided by 3 but not by 7", () => {
  expect(quantityOfNumsDivisibleByThreeButNotBySeven([12, 6, 5, 8, 9])).toBe(3);
});

describe("Which numbers in the array are greater", () => {
  it("Divided into the first element of the array", () => {
    expect(divisibleByFirstElementOrLastWhitchMore([1, 2, 4, 5, 6, 7, 5])).toBe(
      "first is more"
    );
  });
  it("Divided into the last element of the array", () => {
    expect(divisibleByFirstElementOrLastWhitchMore([5, 4, 3, 2, 1])).toBe(
      "last is more"
    );
  });
  it("Equal number", () => {
    expect(
      divisibleByFirstElementOrLastWhitchMore([1, 2, 3, 4, 5, 4, 3, 2, 1])
    ).toBe("equally");
  });
});

it("Sum and product of numbers in array", () => {
  expect(sumAndProductOfNumsInArr([5, 4, 3, 2, 1])).toEqual([15, 120]);
});

it("Sum of even numbers of an array", () => {
  expect(sumOfEvenNumsInArr([5, 4, 3, 2, 1])).toBe(6);
});

it("Sum of odd numbers whose value does not exceed 11", () => {
  expect(sumOfOddNumsLessThanEleven([15, 11, 1, 2])).toBe(12);
});

describe("Sum of numbers of an array", () => {
  it("Sum of numbers up to first even number", () => {
    expect(sumOfNumsBeforeEvenNum([1, 3, 2])).toBe(4);
  });
  it("If there are no even numbers, the sum of all elements except the outer numbers", () => {
    expect(sumOfNumsBeforeEvenNum([101, 3, 3, 3, 101])).toBe(9);
  });
});

it("Сумма элементов массива, которые находятся на четных индексах", () => {
  expect(sumOfNumsOnEvenIndexes([10, 3, 3, 3, 10])).toBe(13);
});

it("Sum of array elements that are on even indexes", () => {
  expect(
    sumOfNumsOnOddIndexesAndBiggerThanSumOfOuterElems([1, 3, 3, 3, 1])
  ).toBe(6);
  expect(
    sumOfNumsOnOddIndexesAndBiggerThanSumOfOuterElems([10, 3, 3, 3, 10])
  ).toBe(0);
});
