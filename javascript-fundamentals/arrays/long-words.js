// your code here
function longWords(words) {
  let arr = [];
  for (word of words) {
    if (word.length > 5) {
      arr.push(word);
    }
  }
  return arr;
}

console.log(longWords(["bike", "skateboard", "scooter", "moped"])); // [ 'skateboard', 'scooter' ]
console.log(longWords(["couscous", "soup", "ceviche", "solyanka", "taco"])); // [ 'couscous', 'ceviche', 'solyanka' ]
