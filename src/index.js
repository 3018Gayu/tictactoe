import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import calculateWinner from './helpers/calculateWinner';
import Board from './components/board/Board';
import GameInfo from './components/game-info/GameInfo';
import Moves from './components/moves/Moves'; // Optional: Add if you're using the Moves component

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
      <main className="container py-5 text-center">
        <h1 className="mb-4 text-primary">Tic Tac Toe</h1>
        <section className="game d-flex justify-content-between align-items-center">
          <GameInfo status={status} winner={winner} xIsNext={xIsNext} />
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} jumpTo={(i) => this.jumpTo(i)} />
        </section>
        {/* Optional: Show move history below the board */}
        {/* <Moves history={history} jumpTo={(i) => this.jumpTo(i)} /> */}
      </main>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={process.env.REACT_APP_URI}>
    <Routes>
      <Route path="/tic-tac-toe" element={<Game />} />
    </Routes>
  </Router>
);
