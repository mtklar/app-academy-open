function maxInMatrix(matrix) {
  let biggest = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (Math.max(...matrix[i]) > biggest) {
      biggest = Math.max(...matrix[i]);
    }
  }
  return biggest;
}

matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72
