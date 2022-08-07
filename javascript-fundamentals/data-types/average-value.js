// your code here
function avgVal(arr) {
  if (arr === []) return null;
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
