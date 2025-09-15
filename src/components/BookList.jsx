import BookCard from "./BookCard";

function BookList({ books, toggleFavorite, favorites }) {
  if (!books || books.length === 0) {
    return <p className="text-center text-muted">No books found yet.</p>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {books.map((book, index) => (
        <BookCard
          key={index}
          book={book}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      ))}
    </div>
  );
}

export default BookList;
