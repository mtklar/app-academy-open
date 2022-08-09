// your code here
function fizzBuzz(num) {
  let newArr = [];
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      newArr.push(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
