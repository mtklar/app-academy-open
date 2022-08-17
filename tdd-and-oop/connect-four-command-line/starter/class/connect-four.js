const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand("t", "test command (remove)", ConnectFour.testCommand);
    Screen.addCommand("a", "move left", ConnectFour.moveLeft.bind(this));
    Screen.addCommand("d", "move right", ConnectFour.moveRight.bind(this));
    Screen.addCommand("return", "make move", ConnectFour.makeMove.bind(this));

    this.cursor.setBackgroundColor();
    Screen.setMessage(this.playerTurn + "'s turn");

    Screen.render();
  }

  static makeMove() {
    // drop player's piece to the bottom of the column
    for (let row = this.grid.length; row > 0; row--) {
      if (this.grid[row - 1][this.cursor.col] === " ") {
        console.log(row, this.cursor.col, this.playerTurn);
        this.grid[row - 1][this.cursor.col] = this.playerTurn;
        Screen.setGrid(row - 1, this.cursor.col, this.playerTurn);

        ConnectFour.checkWin(this.grid);
        this.playerTurn = this.playerTurn === "O" ? "X" : "O";
        Screen.setMessage(this.playerTurn + "'s turn");
        Screen.render();
        break;
      }
    }
  }

  static moveRight() {
    this.cursor.resetBackgroundColor();
    this.cursor.right();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static moveLeft() {
    this.cursor.resetBackgroundColor();
    this.cursor.left();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static checkWin(grid) {
    if (ConnectFour.checkDiagonal(grid)) {
      ConnectFour.endGame(ConnectFour.checkDiagonal(grid));
    }

    if (ConnectFour.checkHorizontal(grid)) {
      ConnectFour.endGame(ConnectFour.checkHorizontal(grid));
    }

    if (ConnectFour.checkVertical(grid)) {
      ConnectFour.endGame(ConnectFour.checkVertical(grid));
    }

    if (ConnectFour.checkTie(grid)) {
      ConnectFour.endGame("T");
    }

    return false;

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
  }

  static checkTie(grid) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === " ") {
          return false;
        }
      }
    }
    return true;
  }

  static checkHorizontal(grid) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length - 3; col++) {
        if (
          grid[row][col] === grid[row][col + 1] &&
          grid[row][col] === grid[row][col + 2] &&
          grid[row][col] === grid[row][col + 3]
        ) {
          if (grid[row][col] !== " ") {
            return grid[row][col];
          }
        }
      }
    }
    return false;
  }

  static checkVertical(grid) {
    for (let col = 0; col < grid[0].length; col++) {
      for (let row = 0; row < grid.length - 3; row++) {
        if (
          grid[row][col] === grid[row + 1][col] &&
          grid[row][col] === grid[row + 2][col] &&
          grid[row][col] === grid[row + 3][col]
        ) {
          if (grid[row][col] !== " ") {
            return grid[row][col];
          }
        }
      }
    }
    return false;
  }

  static checkDiagonal(grid) {
    for (let row = 0; row < grid.length - 3; row++) {
      for (let col = 0; col < grid[row].length - 3; col++) {
        if (
          grid[row][col] === grid[row + 1][col + 1] &&
          grid[row][col] === grid[row + 2][col + 2] &&
          grid[row][col] === grid[row + 3][col + 3]
        ) {
          if (grid[row][col] !== " ") {
            return grid[row][col];
          }
        }
      }
    }
    for (let row = 0; row < grid.length - 3; row++) {
      for (let col = 3; col < grid[row].length; col++) {
        if (
          grid[row][col] === grid[row + 1][col - 1] &&
          grid[row][col] === grid[row + 2][col - 2] &&
          grid[row][col] === grid[row + 3][col - 3]
        ) {
          if (grid[row][col] !== " ") {
            return grid[row][col];
          }
        }
      }
    }
    return false;
  }

  static endGame(winner) {
    if (winner === "O" || winner === "X") {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === "T") {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = ConnectFour;
