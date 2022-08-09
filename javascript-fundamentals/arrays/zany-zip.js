// Your code here
function zanyZip(arr1, arr2) {
  let newArr = [];
  let length = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < length; i++) {
    let el1 = arr1[i] ? arr1[i] : null;
    let el2 = arr2[i] ? arr2[i] : null;
    let tempArray = [];
    tempArray.push(el1);
    tempArray.push(el2);
    newArr.push(tempArray);
  }
  return newArr;
}

console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
