// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  let newArr = [];
  let arrCopy = [...arr];
  while (arrCopy.length > 0) {
    console.log(newArr.join(","));
    let popped = arrCopy.pop();
    newArr.push(null);
    for (let i = newArr.length - 1; i >= 0; i--) {
      if (newArr[i - 1] < popped || newArr[i - 1] === undefined) {
        newArr[i] = popped;
        break;
      } else {
        newArr[i] = newArr[i - 1];
      }
    }
  }
  return newArr;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */
  // Your code here
  let divider = 0;
  while (arr.length > divider) {
    let value = arr[divider];
    for (let i = divider; i >= 0; i--) {
      if (arr[i - 1] < value || arr[i - 1] === undefined) {
        arr[i] = arr[i - 1];
        arr[i] = value;
        break;
      } else {
        arr[i] = arr[i - 1];
      }
    }
    divider++;
    console.log(arr.join(","));
  }
}

module.exports = [insertionSort, insertionSortInPlace];
