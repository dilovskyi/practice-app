export function convertValueInNums(value) {
  // Create arr of numbers from string
  const argumentsArr = value.split(",");
  const numberArgumentsArr = argumentsArr.map((item) => +item);
  return numberArgumentsArr;
}
