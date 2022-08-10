function printObject(obj) {
  for (key in bootcamp) {
    console.log(`${key} - ${bootcamp[key]}`);
  }
}

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120,
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120
