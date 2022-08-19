function addNums(n) {
  total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

console.time("addNums");
addNums(1000000);
console.timeEnd("addNums");

startTime = Date.now();
addNums(1000000);
endTime = Date.now();

console.log(startTime); // 1608078573750
console.log(endTime); // 1608078573765

console.log(`Runtime: ${endTime - startTime}ms`); // Runtime: 15ms
