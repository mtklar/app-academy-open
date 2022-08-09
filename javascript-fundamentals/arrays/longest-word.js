// your code here
function longestWord(sentence) {
  let split = sentence.split(" ");
  let longest = "";
  for (word of split) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWord("where did everyone go")); // 'everyone'
console.log(longestWord("prefer simplicity over complexity")); // 'simplicity'
console.log(longestWord("")); // ''
