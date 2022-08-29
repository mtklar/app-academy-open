function bubbleSort(arr) {
  let swaps = true;
  // Iterate through the array
  while (swaps) {
    swaps = false;
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swaps to true so if we make changes we go through the loop again
        swaps = true;
        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        console.log(arr.join(","));
      }
    }
  }
  // If you get to the end of the array and no swaps have occurred, return
  return true;
}
