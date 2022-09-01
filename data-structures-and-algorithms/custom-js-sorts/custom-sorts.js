function ageSort(users) {
  // sort objects by age
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  // Sort odds before evens
  return arr.sort((a, b) => (b % 2) - (a % 2) || a - b);
}

function validAnagrams(s, t) {
  // use sort to see if 2 strings are anagrams of each other
  return s.split("").sort().join("") === t.split("").sort().join("");
}

function reverseBaseSort(arr) {}

function frequencySort(arr) {
  return arr.sort((a, b) => {
    let aFreq = 0;
    let bFreq = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === a) aFreq++;
      if (arr[i] === b) bFreq++;
    }
    return aFreq - bFreq;
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
