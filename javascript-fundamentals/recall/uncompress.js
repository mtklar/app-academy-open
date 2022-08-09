// uncompress the string by multiplying the letter by the number next to it
function uncompress(string) {
  var result = "";
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    var number = string[i + 1];
    result += letter.repeat(number);
    i++;
  }
  return result;
}

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'
