import { useState, useEffect } from "react";
import { fetchBooks } from "../services/api";
import BookList from "../components/BookList";

function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  // Reset search state whenever page is visited
  useEffect(() => {
    setQuery("");
    setBooks([]);
    setError("");
    setLoading(false);
  }, []); // Runs only once on mount

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const results = await fetchBooks(query);
      if (results.length === 0) setError("No books found.");
      setBooks(results);
    } catch (err) {
      setError("Error fetching books.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (book) => {
    let updated = [];
    if (favorites.some(f => f.key === book.key)) {
      updated = favorites.filter(f => f.key !== book.key);
    } else {
      updated = [...favorites, book];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="container py-4">
      <h1 className="text-center text-primary mb-4">🔍 Search Books</h1>

      <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control me-2"
          style={{ maxWidth: "400px" }}
          placeholder="Enter book title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {books.length > 0 && (
        <BookList books={books} toggleFavorite={toggleFavorite} favorites={favorites} />
      )}
    </div>
  );
}

export default Search;
