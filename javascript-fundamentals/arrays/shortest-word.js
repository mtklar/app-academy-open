// Your code here
function shortestWord(sentence) {
  let split = sentence.split(" ");
  let shortest = split[split.length - 1];
  for (let i = split.length - 1; i >= 0; i--) {
    if (split[i].length < shortest.length) {
      shortest = split[i];
    }
  }
  return shortest;
}

console.log(shortestWord("what a wonderful life")); // 'a'
console.log(shortestWord("the quick brown fox jumps")); // 'fox'
console.log(shortestWord("do what you enjoy")); // 'do'
