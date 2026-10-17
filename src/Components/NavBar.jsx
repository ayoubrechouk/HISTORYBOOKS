import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const currentFilter = useSelector(state => state.filter);

  const watchlistCount = books.filter(b => b.inWatchlist).length;
  const likedCount = books.filter(b => b.liked).length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand text-success fw-bold">BookBox</span>
      <div className="d-flex gap-3 ms-auto">
        <button 
          className={`btn ${currentFilter === "ALL" ? "btn-success" : "btn-outline-light"}`} 
          onClick={() => dispatch({ type: "SET_FILTER", payload: "ALL" })}>
          ALL THE BOOKS IN THE LIBRARY
        </button>
        <button 
          className={`btn ${currentFilter === "WATCHLIST" ? "btn-success" : "btn-outline-light"}`} 
          onClick={() => dispatch({ type: "SET_FILTER", payload: "WATCHLIST" })}>
          Watchlist <span className="badge bg-light text-dark">{watchlistCount}</span>
        </button>
        <button 
          className={`btn ${currentFilter === "FAVORITES" ? "btn-success" : "btn-outline-light"}`} 
          onClick={() => dispatch({ type: "SET_FILTER", payload: "FAVORITES" })}>
          Favoris <span className="badge bg-light text-dark">{likedCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;