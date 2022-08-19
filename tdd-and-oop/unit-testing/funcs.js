function isFive(num) {
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  if (typeof number !== "number") {
    throw new Error("Not a number");
  }

  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function myRange(min, max, step = 1) {
  let array = [];
  for (let i = min; i <= max; i += step) {
    array.push(i);
  }
  return array;
}

console.log(typeof 5);

module.exports = { isFive, isOdd, myRange };
