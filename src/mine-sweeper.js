const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((row, rowIndex) =>
    row.map((_, columnIndex) =>
      [-1, 0, 1].reduce(
        (acc, x) =>
          acc +
          [-1, 0, 1].reduce((count, y) => {
            count +=
              !!(x || y) &&
              matrix[rowIndex + x] &&
              matrix[rowIndex + x][columnIndex + y]
                ? 1
                : 0;
            return count;
          }, 0),
        0
      )
    )
  );
}

module.exports = {
  minesweeper,
};
