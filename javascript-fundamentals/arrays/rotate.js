// your code here
const rotate = function (array, num) {
  if (num < 0) {
    for (let i = 0; i < Math.abs(num); i++) {
      array.push(array.shift());
    }
  } else {
    for (let i = 0; i < num; i++) {
      array.unshift(array.pop());
    }
  }
};

let arr = ["a", "b", "c", "d", "e"];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ["wombat", "koala", "opossum", "kangaroo"];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
