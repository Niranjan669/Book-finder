export async function fetchBooks(query) {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
