// your code here
function initials(name) {
  let split = name.split(" ");
  return split[0][0].toUpperCase() + split[1][0].toUpperCase();
}

console.log(initials("anna paschall")); // 'AP'
console.log(initials("Mary La Grange")); // 'MLG'
console.log(initials("brian crawford scott")); // 'BCS'
console.log(initials("Benicio Monserrate Rafael del Toro Sánchez")); // 'BMRDTS'
