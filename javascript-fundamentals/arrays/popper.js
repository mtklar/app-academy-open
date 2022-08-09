// your code here
function popper(array, num) {
  let newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(array.pop());
  }
  return newArr;
}

let arr1 = ["a", "b", "c", "d", "e"];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]
