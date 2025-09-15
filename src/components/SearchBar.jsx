import { useState } from "react";

function SearchBar({ onSearch }) {
  // Local state to hold the search input value
  const [query, setQuery] = useState("");

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    if (query.trim()) {
      onSearch(query); // Call parent function to trigger search
    }
  };

  return (
    // Search form with input and button
    <form onSubmit={handleSubmit} className="d-flex justify-content-center my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update state on typing
        placeholder="Search for books..."
        className="form-control me-2"
        style={{ maxWidth: "400px" }}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
