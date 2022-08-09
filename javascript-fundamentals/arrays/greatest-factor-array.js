function greatestFactorArray(array) {
  let newArr = [];
  for (num of array) {
    if (num % 2 === 0) {
      newArr.push(greatestFactor(num));
    } else {
      newArr.push(num);
    }
  }
  return newArr;
}

function greatestFactor(num) {
  let iter = Math.ceil(num / 2);
  for (let i = iter; i >= 0; i--) {
    if (num % i === 0) return i;
  }
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
