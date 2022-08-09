function sumArray(array) {
  return array.reduce((a, b) => a + b, 0);
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
