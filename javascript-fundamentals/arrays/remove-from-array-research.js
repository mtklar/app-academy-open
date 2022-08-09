function removeFromArray(location, arr) {
  switch (location) {
    case "FRONT":
      arr.shift();
      break;
    case "BACK":
      arr.pop();
      break;
    default:
      console.log("ERROR");
      break;
  }
}

testArray = [0, 1, 2, 3, 4];

removeFromArray("FRONT", testArray);
console.log(testArray); // [1,2,3,4]

removeFromArray("BACK", testArray);
console.log(testArray); // [1,2,3]

removeFromArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [1,2,3]
