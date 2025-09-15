import { useState } from "react";
import { fetchBooks } from "../services/api";
import BookList from "../components/BookList";

function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const results = await fetchBooks(query);
      if (results.length === 0) {
        setError("No books found.");
      }
      setBooks(results);
    } catch (err) {
      setError("Error fetching books.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Toggle favorite
  const toggleFavorite = (book) => {
    const updated = favorites.some((f) => f.key === book.key)
      ? favorites.filter((f) => f.key !== book.key)
      : [...favorites, book];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="container text-center">
      <h2 className="mb-4">Search Books</h2>

      {/* Centered search form */}
      <form
        onSubmit={handleSearch}
        className="d-flex justify-content-center mb-4"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter book title"
          className="form-control me-2"
          style={{ maxWidth: "400px" }}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {/* Loading and error messages */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <BookList
        books={books}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </div>
  );
}

export default Search;
