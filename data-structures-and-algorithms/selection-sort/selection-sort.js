function selectionSort(arr) {
  // Copy the original array
  let arrCopy = [...arr];
  // Create an array to store the sorted values
  let newArr = [];
  // While the array is not empty...
  while (arrCopy.length > 0) {
    // Find the index of the minimum value in the unsorted half
    let min = arrCopy[0];
    let minIndex = 0;
    for (let i = 1; i < arrCopy.length; i++) {
      if (arrCopy[i] < min) {
        min = arrCopy[i];
        minIndex = i;
      }
    }
    let spliced = arrCopy.splice(minIndex, 1);
    newArr.push(...spliced);
  }
  // Save and remove the value at the min index
  // Add the min value to the end of the sorted array
  return newArr;
}

const arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
selectionSort(arr);

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (arr.length - 1 >= divider) {
    // Find the index of the minimum value in the unsorted half
    // And save it
    let min = arr[divider];
    let minIndex = divider;
    for (let i = minIndex + 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex; i >= divider; i--) {
      arr[i] = arr[i - 1];
    }
    // Put the min value at the divider
    arr[divider] = min;
    // Increment the divider and repeat
    divider++;
  }
}

module.exports = [selectionSort, selectionSortInPlace];
