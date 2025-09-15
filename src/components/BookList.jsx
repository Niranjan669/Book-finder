import BookCard from "./BookCard";

function BookList({ books, toggleFavorite, favorites }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {/* Render each book as a card */}
      {books.map((book) => (
        <BookCard
          key={book.key}
          book={book}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      ))}
    </div>
  );
}

export default BookList;
