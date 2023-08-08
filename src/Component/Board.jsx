import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [state, updateState] = useState(Array(9).fill(null));
  const [isXTern, setXTern] = useState(true);

  const handleReset = () => {
    updateState(Array(9).fill(null));
  };

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winner.length; i++)
    {
      const [a, b, c] = winner[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
      {
        return state[a];
      }
    }

    return null;
  };


  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }

    const copyState = [...state];
    copyState[index] = isXTern ? "X" : "O";
    updateState(copyState);
    setXTern(!isXTern);
  };

  const isWinner = checkWinner();

  let status;
  if (isWinner)
  {
    status = `Winner: ${isWinner}`;
  }
  else if (state.every((square) => square !== null))
  {
    status = "It's a draw!";
  }
  else
  {
    status = `Next player: ${isXTern ? 'X' : 'O'}`;
  }

  return (
    <>
      <div className="board__container">
            <div className="board__row">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="board__row">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="board__row">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
      </div>
      <div className="game-info">{status}</div>
        <div className="btn__container">
          <button className="btn btn-dark" onClick={handleReset}>Reset</button>
          <button className="btn btn-dark" onClick={handleReset}>Play Again</button>
        </div>
    </>
  );
}
