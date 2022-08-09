// your code here
function yeller(words) {
  let arr = [];
  for (word of words) {
    arr.push(word.toUpperCase() + "!");
  }
  return arr;
}

console.log(yeller(["hello", "world"])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(["kiwi", "orange", "mango"])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
