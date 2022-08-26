// const sha = require("js-sha256");

// let hashed = sha("hello world");
// console.log(hashed);

function simpleHash(str) {
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}

let hashed = simpleHash("hello world");
console.log(hashed);
