function addToArray(location, element, arr) {
  // Your code here
  switch (location) {
    case "FRONT":
      arr.unshift(element);
      break;
    case "BACK":
      arr.push(element);
      break;
    default:
      console.log("ERROR");
      break;
  }
}

testArray = [1, 2, 3];

addToArray("FRONT", 0, testArray);
console.log(testArray); // [0,1,2,3]

addToArray("BACK", 4, testArray);
console.log(testArray); // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [0,1,2,3,4]
