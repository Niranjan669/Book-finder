import { useState, useEffect } from "react";
import BookList from "../components/BookList";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);

  const toggleFavorite = (book) => {
    const updated = favorites.filter((f) => f.key !== book.key);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <BookList
          books={favorites}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}
    </div>
  );
}

export default Favorites;
