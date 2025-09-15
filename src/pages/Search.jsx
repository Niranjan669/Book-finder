import { useState, useEffect } from "react";
import { fetchBooks } from "../services/api";
import BookList from "../components/BookList";

function Search() {
  // State variables
  const [query, setQuery] = useState(""); // Search input value
  const [books, setBooks] = useState([]); // List of books from API
  const [loading, setLoading] = useState(false); // Loader flag
  const [error, setError] = useState(""); // Error message (if any)
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]") // Load favorites from localStorage
  );

  // Reset search state whenever page is visited (runs once on mount)
  useEffect(() => {
    setQuery("");   // Clear search input
    setBooks([]);   // Clear previous search results
    setError("");   // Clear any error
    setLoading(false); // Stop loading
  }, []); 

  // Handle book search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return; // Ignore empty input

    setLoading(true);   // Start loader
    setError("");       // Reset error
    setBooks([]);       // Clear old results

    try {
      const results = await fetchBooks(query); // Call API
      if (results.length === 0) setError("No books found."); // No results
      setBooks(results); // Save results to state
    } catch (err) {
      setError("Error fetching books."); // API/Network error
      console.error(err);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  // Add or Remove a book from favorites
  const toggleFavorite = (book) => {
    let updated = [];
    if (favorites.some(f => f.key === book.key)) {
      // If already favorite → remove it
      updated = favorites.filter(f => f.key !== book.key);
    } else {
      // Otherwise → add it
      updated = [...favorites, book];
    }
    setFavorites(updated); // Update state
    localStorage.setItem("favorites", JSON.stringify(updated)); // Persist in localStorage
  };

  return (
    <div className="container py-4">
      <h1 className="text-center text-primary mb-4">🔍 Search Books</h1>

      {/* Search Form */}
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

      {/* Loader / Error messages */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Book Results */}
      {books.length > 0 && (
        <BookList books={books} toggleFavorite={toggleFavorite} favorites={favorites} />
      )}
    </div>
  );
}

export default Search;
