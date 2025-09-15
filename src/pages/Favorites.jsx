import { useState, useEffect } from "react";
import BookList from "../components/BookList";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  // Remove book from favorites
  const removeFavorite = (book) => {
    const updated = favorites.filter((f) => f.key !== book.key);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="container py-4">
      <h1 className="text-center text-primary mb-4">⭐ My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-muted">You have no favorite books yet.</p>
      ) : (
        <BookList books={favorites} toggleFavorite={removeFavorite} favorites={favorites} />
      )}
    </div>
  );
}

export default Favorites;
