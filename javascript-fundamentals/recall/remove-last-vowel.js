// your code here
function removeLastVowel(str) {
  let newStr = str.split("");
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (
      newStr[i] === "a" ||
      newStr[i] === "e" ||
      newStr[i] === "i" ||
      newStr[i] === "o" ||
      newStr[i] === "u"
    ) {
      newStr.splice(i, 1);
      break;
    }
  }
  return newStr.join("");
}

console.log(removeLastVowel("bootcamp")); // 'bootcmp'
console.log(removeLastVowel("better")); // 'bettr'
console.log(removeLastVowel("graph")); // 'grph'
console.log(removeLastVowel("thy")); // 'thy'
