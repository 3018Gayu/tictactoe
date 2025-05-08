import Friends from '../../assets/images/friends.webp';

const GameInfo = ({ status, winner, xIsNext }) => {
  return (
    <section className="container text-center my-4">
      {/* Show draw message if there is no winner and all squares are filled */}
      {status === 'Draw!' ? (
        <h4 className="text-danger mb-3">It's a Draw!</h4>
      ) : winner && status === 'Winner: X' ? (
        <h4 className="text-primary mb-3">Nice! I won!</h4>
      ) : winner && status === 'Winner: O' ? (
        <h4 className="text-success mb-3">Wohoo! I made it!</h4>
      ) : xIsNext ? (
        <h4 className="text-primary mb-3">It's your turn, Player X!</h4>
      ) : (
        <h4 className="text-success mb-3">Now you, Player O!</h4>
      )}

      <div className="d-flex justify-content-center">
        <img
          src={Friends}
          alt="Player X and Player O"
          className="img-fluid rounded shadow-sm"
          style={{ maxWidth: '300px' }}
        />
      </div>
    </section>
  );
};

export default GameInfo;
