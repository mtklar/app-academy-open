// your code here

function lastVowel(str) {
  let vowels = "aeiou";
  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
      return str[i];
    }
  }
  return null;
}

console.log(lastVowel("battery")); // 'e'
console.log(lastVowel("TUNNEL")); // 'E'
console.log(lastVowel("dog")); // 'o'
console.log(lastVowel("conventional")); // 'a'
console.log(lastVowel("rhythm")); // null
