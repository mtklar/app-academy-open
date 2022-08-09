// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

// Your code here
function pascalsTriangle(num) {
  let arr = [[1]];
  for (let i = 1; i < num; i++) {
    let row = arr[arr.length - 1];
    let tempArr = [];
    for (let j = 0; j < row.length + 1; j++) {
      let first = row[j - 1] ? row[j - 1] : 0;
      let second = row[j] ? row[j] : 0;
      let sum = first + second;
      tempArr.push(sum);
    }
    arr.push(tempArr);
  }
  return arr;
}

console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]
