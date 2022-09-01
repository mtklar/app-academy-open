function firstStep(input) {
  return input.split("&");
}

function secondStep(input) {
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    newArr.push(input[i].split("="));
  }
  return newArr;
}

function thirdStep(input) {
  // take array of arrays and remove + signs
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    newArr.push(input[i].map((el) => el.replace(/\+/g, " ")));
  }
  return newArr;
}

function fourthStep(input) {
  //decode values from percent encoding
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    newArr.push(input[i].map((el) => decodeURIComponent(el)));
  }
  return newArr;
}

function fifthStep(input) {
  // turn key-value pairs into an object
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    obj[input[i][0]] = input[i][1];
  }
  return obj;
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
