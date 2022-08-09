// your code here
function twoDimensionalProduct(array) {
  let sum = null;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (sum === null) {
        sum = array[i][j];
      } else {
        sum *= array[i][j];
      }
    }
  }

  return sum;
}

let arr1 = [[6, 4], [5], [3, 1]];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [[11, 4], [2]];
console.log(twoDimensionalProduct(arr2)); // 88
