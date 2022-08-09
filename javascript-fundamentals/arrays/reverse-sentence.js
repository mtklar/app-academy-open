// your code here
function reverseSentence(sentence) {
  let split = sentence.split(" ");
  let newArr = [];
  for (let i = split.length - 1; i >= 0; i--) {
    newArr.push(split[i]);
  }
  return newArr.join(" ");
}

console.log(reverseSentence("I am pretty hungry")); // 'hungry pretty am I'
console.log(reverseSentence("follow the yellow brick road")); // 'road brick yellow the follow'
