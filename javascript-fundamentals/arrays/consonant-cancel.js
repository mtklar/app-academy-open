function consonantCancel(sentence) {
  return sentence
    .split(" ")
    .map((el) => firstVowel(el))
    .join(" ");
}

function firstVowel(word) {
  let vowels = "aeiou";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      return word.slice(i);
    }
  }
}

console.log(firstVowel("hello"));
console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
