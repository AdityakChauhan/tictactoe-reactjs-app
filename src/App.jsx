import { useState } from 'react';
import './App.css';

let cross = false;

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const newBoard = [...board];
    if (!newBoard[index]) {
      newBoard[index] = cross ? 'X' : 'O';
      cross = !cross;
      setBoard(newBoard);

      const winner = checkWinner(newBoard);
      if (winner) {
        alert(winner + " WINS!!!");
        setBoard(Array(9).fill(null));
        cross = false;
      }
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    cross = false;
  };

  return (
    <div className="container">
      <div className="playArea">
        <div className='row'>
          <button onClick={() => handleClick(0)}>{board[0]}</button>
          <button onClick={() => handleClick(1)}>{board[1]}</button>
          <button onClick={() => handleClick(2)}>{board[2]}</button>
        </div>
        <hr />
        <div className='row'>
          <button onClick={() => handleClick(3)}>{board[3]}</button>
          <button onClick={() => handleClick(4)}>{board[4]}</button>
          <button onClick={() => handleClick(5)}>{board[5]}</button>
        </div>
        <hr />
        <div className='row'>
          <button onClick={() => handleClick(6)}>{board[6]}</button>
          <button onClick={() => handleClick(7)}>{board[7]}</button>
          <button onClick={() => handleClick(8)}>{board[8]}</button>
        </div>
        <div className='verticalLine left'></div>
        <div className='verticalLine right'></div>
      </div>
      <div className='extras'>
        <button className='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
