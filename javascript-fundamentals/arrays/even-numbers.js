// your code here
function evenNumbers(max) {
  let arr = [];
  for (let i = 2; i < max; i += 2) {
    arr.push(i);
  }
  return arr;
}

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
