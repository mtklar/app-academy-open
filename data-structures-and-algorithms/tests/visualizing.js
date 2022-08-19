let increment = 1000000;
for (let n = increment; n <= 10 * increment; n += increment) {
  startTime = Date.now();
  addNums(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}

function addNums(n) {
  total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}
