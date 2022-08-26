function multiply(a, b) {
  let product = 0;

  for (i = 0; i < b; i++) {
    product += a;
  }

  return product;
}

const cache = {};

function multiplyCache(a, b) {
  // Create a unique key containing the inputs
  const key = `${a}x${b}`;

  // If the key does not exist in the cache
  if (cache[key] === undefined) {
    // run the calculation and store it in the cache
    cache[key] = multiply(a, b);
  }

  // Return the cached value
  return cache[key];
}
let start = new Date();
console.log(multiply(2, 1000000000));
let end = new Date();
console.log(`Time taken: ${end - start}ms`);

start = new Date();
console.log(multiplyCache(2, 1000000000));
end = new Date();
console.log(`Time taken: ${end - start}ms`);

start = new Date();
console.log(multiplyCache(2, 1000000000));
end = new Date();
console.log(`Time taken: ${end - start}ms`);
