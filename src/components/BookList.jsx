// Displays list of books in grid format
import BookCard from "./BookCard";

function BookList({ books, toggleFavorite, favorites }) {
  return (
    <div className="row g-3">
      {books.map((book) => (
        <div className="col-md-3" key={book.key}>
          <BookCard
            book={book}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </div>
      ))}
    </div>
  );
}

export default BookList;
