function maxColumn(matrix) {
  let newArr = new Array(matrix[0].length);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (newArr[j] === undefined) {
        newArr[j] = matrix[i][j];
      } else if (newArr[j] < matrix[i][j]) {
        newArr[j] = matrix[i][j];
      }
    }
  }

  return newArr;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]
