// your code here
function leastCommonMultiple(num1, num2) {
  let start = Math.max(num1, num2);
  while (true) {
    if (start % num1 === 0 && start % num2 === 0) {
      return start;
    }
    start++;
  }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
