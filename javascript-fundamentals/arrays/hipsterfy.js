// your code here
function hipsterfy(sentence) {
  let split = sentence.split(" ");
  let newArr = [];
  let vowels = "aeiou";

  for (word of split) {
    for (let i = word.length - 1; i >= 0; i--) {
      let char = word[i];
      if (vowels.includes(char)) {
        let newWord = word.slice(0, i) + word.slice(i + 1, word.length);
        newArr.push(newWord);
        break;
      }
    }
  }

  return newArr.join(" ");
}

console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'
