/*Write a function named `allTheArgs(func, ...args)` that will accept a
function `func` and any number of arguments. Then return the string
`"You bowed to"` concatenated to the array of `args`. The `allTheArgs` function
should return the passed-in function `func` modified to always be invoked with
the passed-in arguments `args`. See code block below for further details. */

function allTheArgs(func, ...args) {
  return func.bind(func, ...args);
}
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num);
}
const onePlusTwo = allTheArgs(sum, 1, 2);

const onePlusTwoPlusThree = onePlusTwo(3);
const onePlusTwoPlusFour = onePlusTwo(4);

console.log(onePlusTwoPlusThree); // => 6
console.log(onePlusTwoPlusFour); // => 7
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
