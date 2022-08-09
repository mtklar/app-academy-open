// your code here
function abbreviateWords(sentence) {
  let split = sentence.split(" ");
  let newArr = [];
  for (word of split) {
    if (word.length > 4) {
      newArr.push(removeVowels(word));
    } else {
      newArr.push(word);
    }
  }
  return newArr.join(" ");
}

function removeVowels(word) {
  let vowels = "aeiou";
  let newWord = "";
  for (char of word) {
    if (!vowels.includes(char)) {
      newWord += char;
    }
  }
  return newWord;
}

console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
console.log(abbreviateWords("she sends an excellent message ")); // she snds an xcllnt mssg
