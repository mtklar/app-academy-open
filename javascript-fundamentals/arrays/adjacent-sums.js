// Your code here
function adjacentSums(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] + arr[i + 1]);
  }
  return newArr;
}

console.log(adjacentSums([3, 8, 7, 1])); // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9])); // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3])); // [-1, 0]
