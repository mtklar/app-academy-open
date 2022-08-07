// your code here
function reverseString(str) {
  newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString("fish")); // 'hsif'
console.log(reverseString("marathon")); // 'nohtaram'
