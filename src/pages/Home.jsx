import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center py-5">
      <h1 className="mb-4 text-primary">📚 Welcome to Book Finder</h1>
      <p className="lead mb-4">
        Explore and search books easily using the Open Library API. Find details about authors, published year, and more!
      </p>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => navigate("/search")}
      >
        Explore
      </button>
    </div>
  );
}

export default Home;
