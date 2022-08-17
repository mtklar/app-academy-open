const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand("w", "up", this.cursor.up);
    Screen.addCommand("s", "down", this.cursor.down);
    Screen.addCommand("a", "left", this.cursor.left);
    Screen.addCommand("d", "right", this.cursor.right);
    Screen.addCommand("return", "makeMove", TTT.makeMove.bind(this));

    Screen.render();
  }

  static makeMove() {
    const row = this.cursor.row;
    const col = this.cursor.col;
    const grid = this.grid;
    const player = this.playerTurn;

    Screen.setMessage(
      `Grid: ${grid}, Row: ${row}, Col: ${col}, Player: ${player}`
    );
    Screen.render();
    if (grid[row][col] !== " ") {
      return;
    } else {
      grid[row][col] = player;
      Screen.setGrid(row, col, player);
      Screen.render();
    }

    // switch player turn
    TTT.playerTurn = player === "O" ? "X" : "O";

    if (TTT.checkWin(grid)) {
      TTT.endGame(TTT.checkWin(grid));
    }
  }

  static switchPlayer(player) {
    if (player === "O") {
      this.playerTurn = "X";
    } else {
      this.playerTurn = "O";
    }
  }

  static checkWin(grid) {
    if (this.checkRows(grid)) {
      return this.checkRows(grid);
    }

    if (this.checkCols(grid)) {
      return this.checkCols(grid);
    }

    if (this.checkDiagonals(grid)) {
      return this.checkDiagonals(grid);
    }

    if (this.checkTie(grid)) {
      return "T";
    }
    // Return false if the game has not ended
    return false;
  }

  static checkTie(grid) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === " ") {
          return false;
        }
      }
    }
    return true;
  }

  static checkRows(grid) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
        if (grid[i][0] === " ") {
          continue;
        }
        return grid[i][0];
      }
    }
    return false;
  }

  static checkCols(grid) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
        if (grid[0][i] === " ") {
          continue;
        }
        return grid[0][i];
      }
    }
    return false;
  }

  static checkDiagonals(grid) {
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
      if (grid[0][0] !== " ") {
        return grid[0][0];
      }
    } else if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
      if (grid[0][2] !== " ") {
        return grid[0][2];
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

module.exports = TTT;
