function BookCard({ book, toggleFavorite, favorites }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/120x180?text=No+Cover";

  const isFavorite = favorites?.some(f => f.key === book.key);

  return (
    <div
      className="card text-center shadow-sm p-2 m-2"
      style={{ width: "140px", flexShrink: 0 }}
    >
      <img
        src={coverUrl}
        alt={book.title}
        style={{ width: "120px", height: "180px", objectFit: "cover", margin: "0 auto" }}
      />
      <h6 className="mt-2">{book.title}</h6>
      <p className="mb-1" style={{ fontSize: "0.75rem" }}>
        Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
      <p className="mb-2" style={{ fontSize: "0.7rem", color: "#555" }}>
        Published: {book.first_publish_year || "N/A"}
      </p>
      {toggleFavorite && (
        <button
          className={`btn btn-sm ${isFavorite ? "btn-danger" : "btn-outline-primary"}`}
          onClick={() => toggleFavorite(book)}
        >
          {isFavorite ? "Remove" : "Favorite"}
        </button>
      )}
    </div>
  );
}

export default BookCard;
