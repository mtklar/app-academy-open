function summationSequence(start, length) {
  let arr = [start];
  for (let i = 1; i < length; i++) {
    let lastEl = arr[i - 1];
    let sum = 0;
    for (let i = 0; i <= lastEl; i++) {
      sum += i;
    }
    arr.push(sum);
  }
  return arr;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
