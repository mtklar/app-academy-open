// your code here
function maxValue(nums) {
  if (nums === []) return null;
  return Math.max(...nums);
}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null
