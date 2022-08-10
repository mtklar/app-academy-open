let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];
let [apple, one, two, three, { name }, [pineapple]] = bigArray;
// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"
console.log(pineapple);
