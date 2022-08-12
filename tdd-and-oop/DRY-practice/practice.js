function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = sorted(num1, num2)[1];
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = sorted(num1, num2)[1];
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = sorted(sum1, sum2)[1];
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = sorted(weight1, weight2)[0];
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

function sorted(num1, num2) {
  let arr = [num1, num2];
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
