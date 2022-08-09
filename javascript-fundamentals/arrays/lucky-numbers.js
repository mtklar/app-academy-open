function luckyNumbers(matrix) {
  let luckyNums = [];

  for (let i = 0; i < matrix.length; i++) {
    let min = Math.min(...matrix[i]);

    for (let j = 0; j < matrix[i].length; j++) {
      let max = 0;
      for (let k = 0; k < matrix.length; k++) {
        let el = matrix[k][j];
        if (el > max) {
          max = el;
        }
      }
      if (max === min) {
        luckyNums.push(min);
      }
    }
  }
  return luckyNums;
}

function maxInColumn(matrix, row, col) {
  for (let i = 0; i < matrix.length; i++) {
    let max = 0;
    if (matrix[i][col] > max) {
      max = matrix[i][col];
    }
  }
  return max;
}

matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(luckyNumbers(matrix)); // [12]

matrix = [
  [5, 10, 8, 6],
  [10, 2, 7, 9],
  [21, 15, 19, 10],
];

console.log(luckyNumbers(matrix)); // [10]
