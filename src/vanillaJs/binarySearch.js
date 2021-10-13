function binearSearch(arr = [1, 2, 3, 4, 5, 6, 7], num = 2) {
  let start = -1;
  let end = arr.length;

  while (end - start > 1) {
    let midOfArr = Math.floor((end + start) / 2);

    if (arr[midOfArr] === num) {
      console.log(midOfArr);
      return midOfArr;
    }
    if (arr[midOfArr] < num) {
      start = midOfArr;
    } else {
      end = midOfArr;
    }
  }
  return -1;
}

// Поиск количество вхождений через Binary search
function numOfElementsInArray(arr, num) {
  arr.sort((a, b) => a - b);

  function numOfElementsInArray(arr, num) {
    arr.sort((a, b) => a - b);

    const posEl = binearSearch(arr, num);
    if (posEl === -1) {
      return -1;
    }

    let i = posEl;
    while (arr[i] === num) {
      i--;
    }

    let j = posEl;
    while (arr[j] === num) {
      j++;
    }

    console.log(j - i - 1);
    return j - i - 1;
  }
}
