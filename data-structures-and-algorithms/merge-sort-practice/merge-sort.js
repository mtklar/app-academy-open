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

module.exports = [merge, mergeSort];
