import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    // sets up initial array of board
    let initialBoard = [];
    // for loop to set the rows
    for (let y = 0; y < nrows; y++) {
      // create a row array to contain the true and falses
      let row = [];
      //for loop for each element in the row. true would return a lit up light while false returns an off light
      for (let x = 0; x < ncols; x++) {
        // push each true and false into the row
        row.push(Math.random() < chanceLightStartsOn);
      }
      // each row array is then pushed into the inital board array for an array of arrays
      initialBoard.push(row);
    }
    // TODO: create array-of-arrays of true/false values

    return initialBoard;
  }

  function hasWon() {
    // returns if every cell is false, meaning that all the lights are off.
    return board.every((row) => row.every((cell) => !cell));
    // TODO: check the board in state to determine whether the player has won.
  }

  // function to flip each cell around the cell clicked. We pass the coordinates into the function todetermine what is clicked
  function flipCellsAround(coord) {
    // update the state and set the board
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);

      // define the flip cell
      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };
      // spread the oldboard into a copy
      const boardCopy = oldBoard.map((row) => [...row]);

      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);
      return boardCopy;

      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return <div>You Win!</div>;
  }
  let tblBoard = [];
  for (let y = 0; y < nrows; y++) {
    let row = [];
    for (let x = 0; x < ncols; x++) {
      let coord = `${y}-${x}`;
      row.push(
        <Cell
          key={coord}
          isLit={board[y][x]}
          flipCellsAroundMe={() => flipCellsAround(coord)}
        />
      );
    }
    // TODO

    // make table board

    // TODO
    tblBoard.push(<tr key={y}>{row}</tr>);
  }

  return (
    <table className="Board">
      <tbody>{tblBoard}</tbody>
    </table>
  );
}

export default Board;
