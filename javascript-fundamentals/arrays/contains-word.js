// your code here
function containsWord(sentence, targetWord) {
  let split = sentence.split(" ");
  for (word of split) {
    if (word.toLowerCase() === targetWord) {
      return true;
    }
  }
  return false;
}

console.log(containsWord("sounds like a plan", "like")); // true
console.log(containsWord("They are great", "they")); // true
console.log(containsWord("caterpillars are great animals", "cat")); // false
console.log(containsWord("Cast the net", "internet")); // false
