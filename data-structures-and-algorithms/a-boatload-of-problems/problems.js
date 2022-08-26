function logBetween(lowNum, highNum) {
  let newArr = [];
  for (let i = lowNum; i <= highNum; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(logBetween(-1, 2));
console.log(logBetween(14, 6));
console.log(logBetween(4, 6));

function logBetweenStepper(lowNum, highNum, step) {
  let newArr = [];
  for (let i = lowNum; i <= highNum; i += step) {
    newArr.push(i);
  }
  return newArr;
}

console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]

function printReverse(min, max) {
  let arr = [];
  for (let i = max - 1; i > min; i--) {
    arr.push(i);
  }
  return arr;
}

console.log(printReverse(13, 18));
console.log(printReverse(90, 94));

function fizzBuzz(max) {
  let arr = [];
  for (let i = 1; i < max; i++) {
    if (i % 5 === 0 || (i % 3 === 0 && !(i % 5 === 0 && i % 3 === 0))) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(fizzBuzz(20));

function isPrime(number) {
  if (number === 0 || number === 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(9));
console.log(isPrime(2017));

function maxValue(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

console.log(maxValue([12, 6, 43, 2]));
console.log(maxValue([]));
console.log(maxValue([-4, -10, 0.43]));

function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(myIndexOf([1, 2, 3, 4], 4));
console.log(myIndexOf([5, 6, 7, 8], 2));

function factorArray(array, number) {
  return array.filter((el) => number % el === 0);
}

console.log(factorArray([2, 3, 4, 5, 6], 20));
console.log(factorArray([2, 3, 4, 5, 6], 35));
console.log(factorArray([10, 15, 20, 25], 5));

function oddRange(end) {
  let arr = [];
  for (let i = 0; i <= end; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(oddRange(13));
console.log(oddRange(6));

function reverseHyphenString(string) {
  return string.split("-").reverse().join("-");
}

console.log(reverseHyphenString("Go-to-the-store"));
console.log(reverseHyphenString("Jump,-jump-for-joy"));

function intersect(arr1, arr2) {
  return arr1.filter((el) => arr1.includes(el) && arr2.includes(el));
}

console.log(intersect(["a", "b", "c"], ["x", "y", "z"])); // => []
console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); // => [ 'b', 'd' ]

function mirrorArray(array) {
  return [...array, ...array.reverse()];
}

console.log(mirrorArray([1, 2, 3]));

function abbreviate(sentence) {
  let vowels = "aeiou";
  let split = sentence.split(" ");
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    let el = split[i];
    if (el.length > 4) {
      let withoutVowels = "";
      for (char of el) {
        if (!vowels.includes(char)) {
          withoutVowels += char;
        }
      }
      arr.push(withoutVowels);
    } else {
      arr.push(el);
    }
  }
  return arr.join(" ");
}

console.log(abbreviate("the bootcamp is fun"));
console.log(abbreviate("programming is fantastic"));

function adults(people) {
  let arr = [];
  for (obj of people) {
    if (obj.age >= 18) {
      arr.push(obj.name);
    }
  }
  return arr;
}

const ppl = [
  { name: "John", age: 20 },
  { name: "Jim", age: 13 },
  { name: "Jane", age: 18 },
  { name: "Bob", age: 7 },
];

console.log(adults(ppl));

function countScores(people) {
  let newObj = {};
  for (obj of people) {
    if (obj.name in newObj) {
      newObj[obj.name] += obj.score;
    } else {
      newObj[obj.name] = obj.score;
    }
  }

  return newObj;
}

const peeps = [
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
];

console.log(countScores(peeps));

function firstNPrimes(n) {
  let newArr = [];
  for (let i = 0; newArr.length < 4; i++) {
    if (isPrime(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(firstNPrimes(4));

function peakFinder(array) {
  let newArr = [];
  if (array[0] > array[1]) {
    newArr.push(0);
  }

  for (let i = 1; i < array.length - 1; i++) {
    let el = array[i];
    let prevEl = array[i - 1];
    let nextEl = array[i + 1];
    if (el > prevEl && el > nextEl) {
      newArr.push(i);
    }
  }

  if (array[array.length - 1] > array[array.length - 2]) {
    newArr.push(array.length - 1);
  }
  return newArr;
}

console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]));

function divisibleByThreePairSum(array) {
  let sumArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    let elI = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let elJ = array[j];
      if ((elI + elJ) % 3 === 0) {
        sumArray.push([i, j]);
      }
    }
  }
  return sumArray;
}

console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]));

function zipArray(arr1, arr2) {
  let newArr1 = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr1.push([arr1[i], arr2[i]]);
  }
  return newArr1;
}

const a1 = ["a", "b", "c", "d"];
const a2 = [10, 20, 30, 40];
console.log(zipArray(a1, a2));

function twoDimensionalTotal(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (num of array[i]) {
      sum += num;
    }
  }
  return sum;
}

const arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

console.log(twoDimensionalTotal(arr1));

function countInnerElement(arr) {
  let obj = {};

  for (innerArr of arr) {
    for (num of innerArr) {
      if (num in obj) {
        obj[num]++;
      } else {
        obj[num] = 1;
      }
    }
  }

  return obj;
}

const innerElArray = [
  [1, 2, 4, 5],
  [2, 7, 4],
  [1, 4, 5, 2, 7],
];

console.log(countInnerElement(innerElArray));

function twoDiff(array) {
  let newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    let elI = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let elJ = array[j];
      if (elJ + 2 === elI || elI + 2 === elJ) {
        newArr.push([i, j]);
      }
    }
  }
  return newArr;
}

console.log(twoDiff([2, 3, 4, 6, 1, 7]));

function arrayDiff(arr1, arr2) {
  return arr1.filter((el) => !arr2.includes(el));
}

const arrDiff1 = [1, 23, 2, 43, 3, 4];
const arrDiff2 = [3, 23];
console.log(arrayDiff(arrDiff1, arrDiff2));

function valueCounter(obj, val) {
  let sum = 0;
  for (key in obj) {
    if (obj[key] === val) {
      sum++;
    }
  }
  return sum;
}

const valueCounterObj = { 1: "Anne", 2: "Alvin", 3: "Anne", 4: "Anne" };
console.log(valueCounter(valueCounterObj, "Anne"));

function elementCount(array) {
  let obj = {};
  for (el of array) {
    if (el in obj) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  }
  return obj;
}

console.log(elementCount(["a", "a", "b", "b"]));

function nextTwoPrimes(num) {
  let arr = [];
  for (let i = num + 1; arr.length < 2; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(nextTwoPrimes(97));

function pairProduct(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] === num) {
        newArr.push([i, j]);
      }
    }
  }
  return newArr;
}

console.log(pairProduct([1, 2, 3, 4, 5], 4));

function twoDimensionalSize(array) {
  let count = 0;
  for (innerArr of array) {
    for (el of innerArr) {
      count++;
    }
  }
  return count;
}
const twoDSizeArr = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
console.log(twoDimensionalSize(twoDSizeArr));

function longWordCount(string) {
  let count = 0;
  let split = string.split(" ");
  for (word of split) {
    if (word.length > 7) {
      count++;
    }
  }
  return count;
}

console.log(longWordCount("allwordword longwordword wordswordword"));

function factorial(n) {
  let sum = 1;
  for (let i = n; i >= 1; i--) {
    sum *= i;
  }
  return sum;
}

console.log(factorial(10));

function lcm(num1, num2) {
  let start = num1 > num2 ? num1 : num2;
  let multiple;
  while (!multiple) {
    if (start % num1 === 0 && start % num2 === 0) {
      multiple = start;
    } else {
      start++;
    }
  }
  return start;
}

console.log(lcm(24, 26));

function hipsterfyWord(word) {
  let vowels = "aeiou";
  let lastVowelIndex;
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i].toLowerCase())) {
      lastVowelIndex = i;
      break;
    }
  }
  console.log(lastVowelIndex);
  return (
    word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1, word.length)
  );
}

console.log(hipsterfyWord("BACKWARDS"));

function hipsterfy(sentence) {
  return sentence
    .split(" ")
    .map((el) => hipsterfyWord(el))
    .join(" ");
}

console.log(hipsterfy("proper tonic panther"));

function objectToString(count) {
  let word = "";
  for (key in count) {
    for (let i = 0; i < count[key]; i++) {
      word += key;
    }
  }
  return word;
}

console.log(objectToString({ a: 2, b: 4, c: 1 }));

function shortestWord(sentence) {
  let split = sentence.split(" ");
  let shortest = split[0];
  for (word of split) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }
  return shortest;
}

console.log(shortestWord("app academy is cool"));

function greatestCommonFactor(num1, num2) {
  let start = num1 < num2 ? num1 : num2;
  for (let i = start; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

console.log(greatestCommonFactor(15, 25));
console.log(greatestCommonFactor(16, 24));
console.log(greatestCommonFactor(7, 11));

function isPassing(assessments) {
  let sum = 0;
  let length = assessments.length;
  for (obj of assessments) {
    sum += obj.score;
  }
  return sum / length > 70;
}

const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 },
];

const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 },
];

console.log(isPassing(assessments1));
console.log(isPassing(assessments2));

function valueConcat(array, obj) {
  let newArr = [];
  for (el of array) {
    let stringLatter = obj[el] ? obj[el] : "";
    newArr.push(el + stringLatter);
  }
  return newArr;
}

console.log(valueConcat(["a", "b", "c"], { b: 2, c: 3 }));

function threeInARow(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) return true;
  }
  return false;
}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));

function variableNameify(words) {
  let word = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    let el = words[i];
    word += el[0].toUpperCase() + el.slice(1);
  }
  return word;
}

console.log(variableNameify(["is", "prime"]));

function threeIncreasing(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 1] - 1 && arr[i + 1] === arr[i + 2] - 1) return true;
  }
  return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));

function reverse2D(array) {
  let string = "";
  for (let i = array.length - 1; i >= 0; i--) {
    let innerArr = array[i];

    for (let j = innerArr.length - 1; j >= 0; j--) {
      let innerEl = innerArr[j];
      string += innerEl;
    }
  }
  return string;
}

const reverseArr = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];

console.log(reverse2D(reverseArr));

function reverb(word) {
  let vowels = "aeiou";
  let vowelIndex;
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      vowelIndex = i;
      break;
    }
  }
  return word + word.slice(vowelIndex);
}

console.log(reverb("running"));

function countRepeats(string) {
  let obj = {};
  for (char of string) {
    if (char in obj) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  let count = 0;

  for (key in obj) {
    if (obj[key] > 1) {
      count++;
    }
  }

  return count;
}

console.log(countRepeats("mississippi"));

function pairsToString(arr) {
  let string = "";
  for (innArr of arr) {
    for (let i = 0; i < innArr[1]; i++) {
      string += innArr[0];
    }
  }
  return string;
}
const pairsArr = [
  ["a", 3],
  ["b", 1],
  ["c", 2],
];
console.log(pairsToString(pairsArr));

function countAdjacentSums(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let el1 = arr[i];
    let el2 = arr[i + 1];
    if (el1 + el2 === n) {
      count++;
    }
  }
  return count;
}

console.log(countAdjacentSums([1, 5, 1], 6));

function signFlipCount(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let el1 = nums[i];
    let el2 = nums[i + 1];

    if (el1 > 0 && el2 < 0) {
      count++;
    }

    if (el1 < 0 && el2 > 0) {
      count++;
    }
  }
  return count;
}

console.log(signFlipCount([-12, 10, -3, -5]));

console.log("Power Sequence:");
function powerSequence(base, length) {
  let arr = [base];
  for (let i = 1; i < length; i++) {
    arr.push(base * arr[arr.length - 1]);
  }
  return arr;
}

console.log(powerSequence(3, 4));

function collapseString(str) {
  let newStr = "";
  for (char of str) {
    if (char === newStr[newStr.length - 1]) {
      continue;
    } else {
      newStr += char;
    }
  }
  return newStr;
}

console.log(collapseString("apple"));

function oddWordsOut(sentence) {
  return sentence
    .split(" ")
    .filter((el) => el.length % 2 === 0)
    .join(" ");
}

console.log(oddWordsOut("go to the store and buy milk"));

function mindPsAndQs(str) {
  let count = 0;
  let biggest = 0;
  for (char of str) {
    if (char === "Q" || char === "P") {
      count++;
    } else {
      if (count > biggest) {
        biggest = count;
      }
      count = 0;
    }
  }
  return biggest;
}

console.log(mindPsAndQs("APCDQQPPC"));

function commonFactors(num1, num2) {
  let start = num1 < num2 ? num1 : num2;
  let arr = [];
  for (let i = 1; i < start; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(commonFactors(12, 50));
console.log(commonFactors(45, 60));

function commonPrimeFactors(num1, num2) {
  let start = num1 < num2 ? num1 : num2;
  let arr = [];
  for (let i = 1; i < start; i++) {
    if (isPrime(i)) {
      if (num1 % i === 0 && num2 % i === 0) {
        arr.push(i);
      }
    }
  }
  return arr;
}

console.log(commonPrimeFactors(45, 60));

function splitHalfArray(array) {
  let middle = Math.floor(array.length / 2);

  let arr1 = [];
  for (let i = 0; i < middle; i++) {
    arr1.push(array[i]);
  }

  let arr2 = [];
  let even = 0;
  if (array.length % 2 !== 0) {
    even++;
  }
  for (let i = middle + even; i < array.length; i++) {
    arr2.push(array[i]);
  }

  return [arr1, arr2];
}

console.log(splitHalfArray([1, 2, 3, 4, 5]));
console.log(splitHalfArray([1, 2, 3, 4, 5, 6]));

function threeUniqueVowels(string) {
  let vowels = "aeiou";
  let obj = {};
  for (char of string) {
    if (vowels.includes(char)) {
      if (char in obj) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }

  let count = 0;
  for (key in obj) {
    count++;
  }

  return count > 3;
}

console.log(threeUniqueVowels("delicious"));
console.log(threeUniqueVowels("bootcamp"));

// real modolus function in js
function mod(n, m) {
  return ((n % m) + m) % m;
}

function vowelShift(sentence) {
  let vowels = "aeiou";
  let newSentence = "";
  for (char of sentence) {
    if (vowels.includes(char)) {
      let index = vowels.indexOf(char);
      let newIndex = mod(index + 1, vowels.length);
      newSentence += vowels[newIndex];
    } else {
      newSentence += char;
    }
  }
  return newSentence;
}

console.log(vowelShift("bootcamp"));

function hasSymmetry(array) {
  let middle = Math.floor(array.length / 2);
  let startPointer = 0;
  let endPointer = array.length - 1;
  while (startPointer < middle) {
    if (array[startPointer] !== array[endPointer]) {
      return false;
    }
    startPointer++;
    endPointer--;
  }
  return true;
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1]));
console.log(hasSymmetry([1, 2, 3, 3, 4, 1]));

function evenSumArray(array) {
  let newArr = [];

  for (num of array) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
      if (i % 2 == 0) {
        sum += i;
      }
    }
    newArr.push(sum);
  }
  return newArr;
}

console.log(evenSumArray([6, 7, 5]));
console.log(evenSumArray([2, 8, 3, 5]));

function numsToWords(numString) {
  let string = "";

  for (num of numString) {
    switch (num) {
      case "1":
        string += "One";
        break;
      case "2":
        string += "Two";
        break;
      case "3":
        string += "Three";
        break;
      case "4":
        string += "Four";
        break;
      case "5":
        string += "Five";
        break;
      case "6":
        string += "Six";
        break;
      case "7":
        string += "Seven";
        break;
      case "8":
        string += "Eight";
        break;
      case "9":
        string += "Nine";
        break;
      case "0":
        string += "Zero";
        break;
    }
  }
  return string;
}

console.log(numsToWords("42"));
console.log(numsToWords("123"));

function moreDotLessDash(str) {
  let dots = 0;
  let dashes = 0;
  for (char of str) {
    if (char === "-") dashes++;
    if (char === ".") dots++;
  }
  return dots > dashes;
}

console.log(moreDotLessDash(".-.-."));
console.log(moreDotLessDash(".-"));
