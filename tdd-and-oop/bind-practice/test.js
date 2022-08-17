// Your code here
const { Employee } = require("./employee");

let john = new Employee("John Wick", "Dog Lover");
let johnBound = john.sayName.bind(john);

setTimeout(johnBound, 2000);

let johnOccuBound = john.sayOccupation.bind(john);

setTimeout(johnOccuBound, 2500);
