function tripleSequence(start, length) {
  let arr = [start];
  for (let i = 0; i < length - 1; i++) {
    arr.push(arr[arr.length - 1] * 3);
  }
  return arr;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
