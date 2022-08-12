const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber;
let turns = 5;

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askGuess() {
  rl.question("Enter a guess: ", (answer) => {
    const guess = parseInt(answer);
    const correct = checkGuess(guess);
    if (!correct) {
      turns--;
      if (turns === 0) {
        console.log("You lose!");
        rl.close();
      } else {
        askGuess();
      }
    } else {
      rl.close();
    }
  });
}

function checkGuess(num) {
  if (num === secretNumber) {
    console.log("You got it!");
    return true;
  } else if (num < secretNumber) {
    console.log("Too low");
    return false;
  } else {
    console.log("Too high");
    return false;
  }
}

function askRange() {
  rl.question("Enter a minimum number: ", (answer) => {
    const min = parseInt(answer);
    rl.question("Enter a maximum number: ", (answer) => {
      const max = parseInt(answer);
      secretNumber = randomInRange(min, max);
      askGuess();
    });
  });
}

askRange();
