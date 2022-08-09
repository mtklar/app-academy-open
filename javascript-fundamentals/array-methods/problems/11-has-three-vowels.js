/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function (string) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (char of string) {
    if (vowels.includes(char.toLowerCase())) {
      vowels.splice(vowels.indexOf(char.toLowerCase()), 1);

      count++;
    }
  }
  return count >= 3;
};

function threeVowels(word) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (char of word) {
    if (vowels.includes(char.toLowerCase())) {
      vowels.splice(vowels.indexOf(char.toLowerCase()), 1);
      count++;
    }
  }
  return count >= 3;
}

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hasThreeVowels;
} catch (e) {
  module.exports = null;
}
