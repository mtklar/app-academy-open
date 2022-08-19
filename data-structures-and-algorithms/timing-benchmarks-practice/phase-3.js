const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  function addNums10(increment) {
    let arr = [];

    for (let i = increment; i <= 10 * increment; i += increment) {
      let startTime = Date.now();
      arr.push(addNums(i));
      let endTime = Date.now();
      console.log(`Time elapsed: ${endTime - startTime}ms`);
    }
    return arr;
  }
  // Then, add timing code
  addNums10(increment);
  // Your code here
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code
  // Your code here
  function addManyNums10(increment) {
    let arr = [];
    for (let i = increment; i <= 15 * increment; i += increment) {
      let starttime = Date.now();
      arr.push(addManyNums(i));
      let endtime = Date.now();
      console.log(`${endtime - starttime / 1000}`);
    }
    return arr;
  }

  addManyNums10(increment);
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
