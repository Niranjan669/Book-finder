// Displays one book card
function BookCard({ book, toggleFavorite, favorites }) {
  const isFavorite = favorites.some((f) => f.key === book.key);

  return (
    <div className="card h-100">
      <img src={book.cover} alt={book.title} className="card-img-top" />
      <div className="card-body">
        <h5>{book.title}</h5>
        <p>{book.author}</p>
        <p>{book.year}</p>
        <button
          onClick={() => toggleFavorite(book)}
          className={`btn ${isFavorite ? "btn-danger" : "btn-success"}`}
        >
          {isFavorite ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
    </div>
  );
}

export default BookCard;
