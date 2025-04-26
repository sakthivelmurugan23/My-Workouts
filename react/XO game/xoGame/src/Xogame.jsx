import { useState } from "react";

function Xogame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner ? Winner: ${winner} : Next Player: ${isXNext ? "X" : "O"};

  return (
    <div className="flex flex-col items-center p-4">



      <h1 className="text-2xl mb-4">Tic-Tac-Toe</h1>


      <div className="grid grid-cols-3 gap-2">


        {board.map((cell, index) => (
          <button
            key={index}
            className="w-16 h-16 text-xl font-bold flex items-center justify-center border border-gray-500"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}



      </div>hui
      <p className="mt-4 text-lg">{status}</p>

      
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" 
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Restart
      </button>
    </div>
  );
}

export default Xogame;