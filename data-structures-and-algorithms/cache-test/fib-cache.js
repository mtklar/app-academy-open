cache = {}; // Memo cache

function fibMemo(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  if (cache[n] === undefined) {
    cache[n] = fibMemo(n - 1) + fibMemo(n - 2);
  }

  return cache[n];
}

cacheT = {};

function fibTab(n) {
  cacheT[1] = 0;
  cacheT[2] = 1;

  for (let i = 3; i <= n; i++) {
    cacheT[i] = cacheT[i - 1] + cacheT[i - 2];
  }

  return cacheT[n];
}

let start = new Date();
fibMemo(1000);
let end = new Date();
console.log(`fib recursive: ${end - start}ms`);

start = new Date();
fibTab(1000);
end = new Date();
console.log(`fib iterative: ${end - start}ms`);

// Testing how slow non cache fib is

function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

start = new Date();
fib(30);
end = new Date();
console.log(`non-cache fib: ${end - start}ms`);

// Another fib function using JS default arguments

function fastFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

start = new Date();
fastFib(1000);
end = new Date();
console.log(`fib cache fast: ${end - start}ms`);

// The most optimizated fib function

function fib(n) {
  let mostRecentCalcs = [0, 1];

  if (n === 0) return mostRecentCalcs[0];

  for (let i = 2; i <= n; i++) {
    const [secondLast, last] = mostRecentCalcs;
    mostRecentCalcs = [last, secondLast + last];
  }

  return mostRecentCalcs[1];
}

start = new Date();
fib(1000000000);
end = new Date();
console.log(`fib optimized tabulation: ${end - start}ms`);
