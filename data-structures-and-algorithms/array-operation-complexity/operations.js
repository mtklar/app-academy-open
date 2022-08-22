// Pushing is considered O(n) because JS overallocates memory for the array. But if you fully preallocate the array, then pushing is O(1)

function addToBack(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return arr;
}

function addToFrontPreallocated(n) {
  // Preallocate n slots of memory in an array
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

n = 10000000;

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimePre = Date.now();
arr = addToFrontPreallocated(n);
endTimePre = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log(
  "addToFrontPreallocated(" + n + ") = " + (endTimePre - startTimePre) + "ms"
);

// With unshift we have to move every element in the array one index to the right, so it's O(n).

function addToFront(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.unshift(n - i);
  }
  return arr;
}

n = 500000;

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimeFront = Date.now();
arr = addToFront(n);
endTimeFront = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log(
  "addToFront(" + n + ") = " + (endTimeFront - startTimeFront) + "ms"
);

// addToBack(50000) = 4ms
// addToFront(50000) = 194ms
