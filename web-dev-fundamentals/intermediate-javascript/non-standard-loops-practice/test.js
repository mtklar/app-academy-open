function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (n ** i > arr.length) {
      break;
    }
    newArr.push(arr[n ** i]);
  }
  return newArr;
}

console.log(nthPower([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
