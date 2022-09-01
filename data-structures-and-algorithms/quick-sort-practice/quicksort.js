function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) {
    return arr;
  }

  // Pick the first value as the pivot
  let pivot = arr[0];

  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  let left = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (el < pivot) {
      left.push(el);
    }
  }
  // every number larger (or equal) than the pivot is to the right
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (el > pivot) {
      right.push(el);
    }
  }

  // Recursively sort the left right and return the pivot
  return [...quicksort(left), pivot, ...quicksort(right)];
}

let arr = [];
let arr2 = [];
let arr3 = [];
for (let i = 0; i < 10000000; i++) {
  let el = Math.random() * 10000000;
  arr.push(el);
  arr2.push(el);
  arr3.push(el);
}

let start = Date.now();
quicksort(arr);
let end = Date.now();
console.log(`Quick Sort: ${end - start}ms`);

let start2 = Date.now();
arr2.sort((a, b) => a - b);
let end2 = Date.now();
console.log(`Built-in Sort: ${end2 - start2}ms`);

let start3 = Date.now();
mergeSort(arr3);
let end3 = Date.now();
console.log(`Merge Sort: ${end3 - start3}ms`);

function mergeSort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }
  // Divide the array in half
  let middle = Math.floor(arr.length / 2);
  let arrLeft = arr.slice(0, middle);
  let arrRight = arr.slice(middle, arr.length);
  // Recursively sort the left half
  let left = mergeSort(arrLeft);
  // Recursively sort the right half
  let right = mergeSort(arrRight);
  // Merge the halves together and return
  return merge(left, right);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let newArr = [];
  // Point to the first value of each array
  let lPointer = 0;
  let rPointer = 0;
  // While there are still values in each array...
  while (lPointer < arrA.length && rPointer < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[lPointer] < arrB[rPointer]) {
      newArr.push(arrA[lPointer]);
      lPointer++;
    } else {
      newArr.push(arrB[rPointer]);
      rPointer++;
    }
  }
  // Push the rest of the left array into newArr if any elements remain
  while (lPointer < arrA.length) {
    newArr.push(arrA[lPointer]);
    lPointer++;
  }
  // Push the rest of the right array into newArr if any elements remain
  while (rPointer < arrB.length) {
    newArr.push(arrB[rPointer]);
    rPointer++;
  }

  return newArr;
}

module.exports = [quicksort];
