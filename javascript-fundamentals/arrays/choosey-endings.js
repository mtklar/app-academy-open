// Your code here
function chooseyEndings(arr, suff) {
  if (!Array.isArray(arr)) return [];

  let newArr = [];
  for (word of arr) {
    if (word.endsWith(suff)) {
      newArr.push(word);
    }
  }
  return newArr;
}

console.log(
  chooseyEndings(
    ["family", "hound", "catalyst", "fly", "timidly", "bond"],
    "ly"
  )
);
// [ 'family', 'fly', 'timidly' ]

console.log(
  chooseyEndings(
    ["family", "hound", "catalyst", "fly", "timidly", "bond"],
    "nd"
  )
);
// [ 'hound', 'bond' ]

console.log(chooseyEndings(["simplicity", "computer", "felicity"], "icity"));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(["simplicity", "computer", "felicity"], "ily"));
// [ ]

console.log(chooseyEndings(17, "ily"));
// [ ]
