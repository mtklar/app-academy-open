// Your code here
function zip(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let newNewArr = [];
    newNewArr.push(arr1[i]);
    newNewArr.push(arr2[i]);
    newArr.push(newNewArr);
  }
  return newArr;
}

console.log(zip([1, 2, 3, 4], ["eins", "zwei", "drei", "vier"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(["eins", "zwei", "drei"], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(["alef", "bet"], ["alpha", "beta"]));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
