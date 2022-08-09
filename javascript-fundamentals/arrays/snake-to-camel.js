// Your code here
function snakeToCamel(string) {
  let split = string.split("_");
  let newArr = [];

  for (word of split) {
    let newString = "";
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        newString += word[i].toUpperCase();
      } else {
        newString += word[i];
      }
    }
    newArr.push(newString);
  }

  return newArr.join("");
}

console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
console.log(snakeToCamel("say_hello_world")); // 'SayHelloWorld'
console.log(snakeToCamel("app_academy_is_cool")); // 'AppAcademyIsCool'
console.log(snakeToCamel("APp_ACADEMY_iS_cOol")); // 'AppAcademyIsCool'
