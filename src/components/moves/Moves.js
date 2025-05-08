import React from 'react';

const Moves = ({ history, jumpTo }) => {
  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move} className="list-group-item d-flex justify-content-between align-items-center">
        <button className="btn btn-outline-secondary btn-sm" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  return (
    <section className="container my-4">
      <h5 className="mb-3">Move History</h5>
      <ul className="list-group">{moves}</ul>
    </section>
  );
};

export default Moves;
