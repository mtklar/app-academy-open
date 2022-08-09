// return a sentence where every word misses it's last vowel
function hipsterfy(string) {
  let vowels = "aeiou";
  let split = string.split(" ");
  let newArr = [];
  for (let i = 0; i < split.length; i++) {
    let word = split[i];
    for (let j = word.length - 1; j >= 0; j--) {
      if (vowels.includes(word[j])) {
        newArr.push(word.slice(0, j) + word.slice(j + 1));
        break;
      }
    }
  }
  return newArr.join(" ");
}

console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'
