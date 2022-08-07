// your code here
function removeLastVowel(word) {
  let vowels = "aeiou";
  let vowelIndex;
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      vowelIndex = i;
      break;
    }
  }
  if (vowelIndex === undefined) return word;
  return word.slice(0, vowelIndex) + word.slice(vowelIndex + 1, word.length);
}

console.log(removeLastVowel("bootcamp")); // 'bootcmp'
console.log(removeLastVowel("better")); // 'bettr'
console.log(removeLastVowel("graph")); // 'grph'
console.log(removeLastVowel("thy")); // 'thy'
