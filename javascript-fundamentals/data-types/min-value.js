// your code here
function minValue(nums) {
  if (nums === []) {
    return null;
  }

  return Math.min(...nums);
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null
