function sameCharCollapse(str) {
  let split = str.split("");
  let flag = true;
  while (flag) {
    for (let i = 0; i < split.length; i++) {
      if (split[i] === split[i + 1]) {
        split.splice(i, 2);
        break;
      } else if (i === split.length - 1) {
        flag = false;
      }
    }
  }
  return split.join("");
}

console.log(sameCharCollapse("zzzxaaxy")); // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
