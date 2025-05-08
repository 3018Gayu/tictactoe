import Square from '../square/Square';

const Board = ({ squares, onClick, jumpTo }) => {
  const renderSquare = (i) => {
    return (
      <div className="col-4 p-2">
        <Square value={squares[i]} onClick={() => onClick(i)} />
      </div>
    );
  };

  return (
    <section className="container text-center my-5">
      <h2 className="mb-4">Tic Tac Toe</h2>
      <div className="row justify-content-center">
        {[0, 1, 2].map(renderSquare)}
      </div>
      <div className="row justify-content-center">
        {[3, 4, 5].map(renderSquare)}
      </div>
      <div className="row justify-content-center">
        {[6, 7, 8].map(renderSquare)}
      </div>
      <button
        className="btn btn-primary mt-4"
        onClick={() => jumpTo(0)}
      >
        Restart the Game
      </button>
    </section>
  );
};

export default Board;
