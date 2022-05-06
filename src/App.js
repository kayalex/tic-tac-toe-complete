import React, { useState, useEffect } from 'react';

import './App.css';

let board = ['', '', '', '', '', '', '', '', ''];
function App() {
  const WIN_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [turn, setTurn] = useState('x');
  const [isDraw, setIsDraw] = useState(false);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    checkDraw();
    checkWin();
  }, [turn]);

  const checkWin = () => {
    for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
      if (
        board[WIN_COMBINATIONS[i][0]] == board[WIN_COMBINATIONS[i][1]] &&
        board[WIN_COMBINATIONS[i][1]] == board[WIN_COMBINATIONS[i][2]] &&
        board[WIN_COMBINATIONS[i][1]] != ''
      ) {
        setIsWon(true);
        console.log(board);
      }
    }
  };
  const checkDraw = () => {
    const emptySpace = board.find((item) => item == '');
    if (emptySpace != '' && isWon === false) {
      setIsDraw(true);
    }
  };
  const play = (e) => {
    if (
      e.currentTarget.classList.contains('x') ||
      e.currentTarget.classList.contains('o')
    ) {
      if (turn === 'x') {
        setTurn('x');
        return;
      }
      if (turn === 'o') {
        setTurn('o');
        return;
      }
      return;
    }
    if (turn === 'x') {
      setTurn('o');
    } else if (turn === 'o') {
      setTurn('x');
    }
    e.currentTarget.classList.add(turn);
  };
  if (isDraw) {
    return (
      <div>
        <h1>IT'S A DRAW</h1>
        <button
          className='btn'
          onClick={() => {
            window.location.reload();
          }}
        >
          NEW GAME
        </button>
      </div>
    );
  }
  if (isWon) {
    return (
      <div>
        <h1>{turn === 'x' ? 'O HAS WON' : 'X HAS WON'}</h1>
        <button
          className='btn'
          onClick={() => {
            window.location.reload();
          }}
        >
          NEW GAME
        </button>
      </div>
    );
  }

  return (
    <section>
      <div className='board'>
        <div
          className='cell one'
          onClick={(e) => {
            play(e);
            if (e.currentTarget.classList.contains('x')) {
              board[0] = 'x';
            }
            if (e.currentTarget.classList.contains('o')) {
              board[0] = 'o';
            }
          }}
        ></div>
        <div
          className='cell two'
          onClick={(e) => {
            play(e);
            if (e.currentTarget.classList.contains('x')) {
              board[1] = 'x';
            }
            if (e.currentTarget.classList.contains('o')) {
              board[1] = 'o';
            }
          }}
        ></div>
        <div
          className='cell three'
          onClick={(e) => {
            play(e);
            if (e.currentTarget.classList.contains('x')) {
              board[2] = 'x';
            }
            if (e.currentTarget.classList.contains('o')) {
              board[2] = 'o';
            }
          }}
        ></div>
        <div
          className='cell four'
          onClick={(e) => {
            play(e);
            if (e.currentTarget.classList.contains('x')) {
              board[3] = 'x';
            }
            if (e.currentTarget.classList.contains('o')) {
              board[3] = 'o';
            }
          }}
        ></div>
        <div
          className='cell five'
          onClick={(e) => {
            play(e);
            if (e.currentTarget.classList.contains('x')) {
              board[4] = 'x';
            }
            if (e.currentTarget.classList.contains('o')) {
              board[4] = 'o';
            }
          }}
        ></div>
        <div
          className='cell six'
          onClick={(e) => {
            play(e);
            if (e.currentTarget.classList.contains('x')) {
              board[5] = 'x';
            }
            if (e.currentTarget.classList.contains('o')) {
              board[5] = 'o';
            }
          }}
        ></div>
        <div
          className='cell seven'
          onClick={(e) => {
            play(e);
            if (e.currentTarget.classList.contains('x')) {
              board[6] = 'x';
            }
            if (e.currentTarget.classList.contains('o')) {
              board[6] = 'o';
            }
          }}
        ></div>
        <div
          className='cell eight'
          onClick={(e) => {
            play(e);
            if (e.currentTarget.classList.contains('x')) {
              board[7] = 'x';
            }
            if (e.currentTarget.classList.contains('o')) {
              board[7] = 'o';
            }
          }}
        ></div>
        <div
          className='cell nine'
          onClick={(e) => {
            play(e);
            if (e.currentTarget.classList.contains('x')) {
              board[8] = 'x';
            }
            if (e.currentTarget.classList.contains('o')) {
              board[8] = 'o';
            }
          }}
        ></div>
      </div>
      <button
        className='btn'
        onClick={() => {
          window.location.reload();
        }}
      >
        NEW GAME
      </button>
    </section>
  );
}

export default App;
