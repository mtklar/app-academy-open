function pickPrimes(array) {
  let newArr = [];
  for (num of array) {
    if (isPrime(num)) {
      newArr.push(num);
    }
  }
  return newArr;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(pickPrimes([2, 3, 4, 5, 6])); // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017])); // [101, 103, 2017]
