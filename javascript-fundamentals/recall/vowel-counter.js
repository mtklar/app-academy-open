function countVowels(word) {
  let vowels = "aeiou";
  let count = 0;
  for (char of word) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
