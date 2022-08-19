// 1.
function sum(array) {
  try {
    if (!Array.isArray(array)) {
      throw new Error("The argument is not an array.");
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } catch (error) {
    console.log(error.message);
  }
}

let res = sum(null);
console.log(res);

// 2.
function sayName(string) {
  if (!string) {
    throw new TypeError("There was no name given.");
  } else {
    console.log(string);
  }
}
// tests
try {
  sayName("Alex");
} catch (error) {
  console.log(error.message);
}
try {
  sayName(1);
} catch (error) {
  console.log(error.message);
}

// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}
