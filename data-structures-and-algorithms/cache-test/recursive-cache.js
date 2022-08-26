function recursiveMultiply(a, b) {
  if (b === 1) return a;

  return a + recursiveMultiply(a, b - 1);
}

function recursiveMultiplyCached(a, b) {
  if (b === 1) return a;

  const key = `${a}x${b}`;

  if (cache[key] === undefined) {
    cache[key] = a + recursiveMultiplyCached(a, b - 1);
  }

  return cache[key];
}

const cache = {};

// let start = new Date();
// console.log(recursiveMultiply(2, 1000000000));
// let end = new Date();
// console.log(`Time taken: ${end - start}ms`);

start = new Date();
console.log(recursiveMultiplyCached(2, 1000));
end = new Date();
console.log(`Time taken: ${end - start}ms`);
