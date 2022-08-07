// Your code here
function reverb(word) {
  if (typeof word !== "string") return null;

  let vowels = "aeiou";
  let newWord = word;

  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i];
    if (vowels.indexOf(char.toLowerCase()) !== -1) {
      for (let j = i; j < word.length; j++) {
        newWord += word[j];
      }
      break;
    }
  }
  return newWord;
}

console.log(reverb("running")); // runninging
console.log(reverb("FAMILY")); // FAMILYILY
console.log(reverb("trash")); // trashash
console.log(reverb("DISH")); // DISHISH
console.log(reverb(197393)); // null
