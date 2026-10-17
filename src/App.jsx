import { useSelector } from 'react-redux';
import Navbar from "./Components/NavBar";
import BookCard from "./Components/BookCard";

function App() {
  const books = useSelector(state => state.books);
  const filter = useSelector(state => state.filter);

  const filteredBooks = books.filter(book => {
    if (filter === "WATCHLIST") return book.inWatchlist;
    if (filter === "FAVORITES") return book.liked;
return true;
  });
  return (
    <div style={{ backgroundColor: "#120053", minHeight: "100vh" }}>
      <Navbar />
      <div className="container mt-5">
        {filteredBooks.length === 0 ? (
          <h3 className="text-center text-secondary">Aucun books dans cette catégorie found</h3>
        ) : (
          <div className="row">
            {filteredBooks.map(book => (
              <div className="col-12 col-md-6 col-lg-3" key={book.id}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;