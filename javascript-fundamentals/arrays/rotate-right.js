// your code here
function rotateRight(array, num) {
  let newArr = [...array];
  for (let i = 0; i < num; i++) {
    newArr.unshift(newArr.pop());
  }
  return newArr;
}

let arr = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ["wombat", "koala", "opossum", "kangaroo"];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
