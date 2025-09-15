// Service file: responsible for fetching data
export const fetchBooks = async (title) => {
  const res = await fetch(`https://openlibrary.org/search.json?title=${title}`);
  const data = await res.json();
  return data.docs.map((book) => ({
    key: book.key,
    title: book.title,
    author: book.author_name ? book.author_name.join(", ") : "Unknown",
    year: book.first_publish_year || "N/A",
    cover: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : "https://via.placeholder.com/150x200?text=No+Cover",
  }));
};
