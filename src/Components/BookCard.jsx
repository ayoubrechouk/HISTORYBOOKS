import { useDispatch } from 'react-redux';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleWatchlist = () => {
    if (book.inWatchlist) {
      dispatch({ type: "REMOVE", payload: book.id });
    } else {
      dispatch({ type: "ADD", payload: book.id });
    }
  };

  return (
    <div className="card bg-dark text-white border-secondary mb-3 shadow">
      <img src={book.poster} className="card-img-top" alt={book.title} style={{ height: "400px", objectFit: "cover" }} />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{book.title}</h5>
        <p className="card-text text-muted">{book.year} | {book.genre}</p>
        
        <div className="d-flex justify-content-between mt-3">
          <button 
            className={`btn btn-sm ${book.inWatchlist ? "btn-warning" : "btn-outline-warning"}`} 
            onClick={handleWatchlist}>
            {book.inWatchlist ? "Remove Watchlist" : "Add Watchlist"}
          </button>
          <button 
            className={`btn btn-sm ${book.liked ? "btn-danger" : "btn-outline-danger"}`} 
            onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: book.id })}>
            {book.liked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;