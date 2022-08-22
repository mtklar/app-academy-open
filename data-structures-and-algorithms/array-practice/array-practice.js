const findMinimum = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const runningSum = (arr) => {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    arr[i] = sum;
  }
  return arr;
};

const evenNumOfChars = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) {
      total++;
    }
  }
  return total;
};

const smallerThanCurr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentTotal = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        currentTotal++;
      }
    }
    newArr.push(currentTotal);
  }
  return newArr;
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

const secondLargest = (arr) => {
  if (arr.length < 2) {
    return undefined;
  }
  let largest;
  let secondLargestVar;

  if (arr[0] > arr[1]) {
    largest = arr[0];
    secondLargestVar = arr[1];
  } else {
    largest = arr[1];
    secondLargestVar = arr[0];
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] >= largest) {
      secondLargestVar = largest;
      largest = arr[i];
    }
  }
  return secondLargestVar;
};

const shuffle = (arr) => {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    let randomIndex = Math.floor(Math.random() * newArr.length);
    let temp = newArr[i];
    newArr[i] = newArr[randomIndex];
    newArr[randomIndex] = temp;
  }
  return newArr;
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
