import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../styles/MovieList.css";

function MovieList({
  movies,
  handleAddFavorite,
  handleRemoveFavorite,
  favorites,
}) {
  const [sortOrder, setSortOrder] = useState("desc");

  const isFavorite = (movie) => favorites.some((fav) => fav.id === movie.id);

  const sortedMovies = useMemo(() => {
    return [...movies].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.imdbRating - b.imdbRating;
      } else {
        return b.imdbRating - a.imdbRating;
      }
    });
  }, [movies, sortOrder]);

  if (movies.length === 0) {
    return (
      <div className="text-center mt-5">
        <h5>Sonuç bulunamadı.</h5>
      </div>
    );
  }

  return (
    <div className="movie-list-container">
      <div className="d-flex justify-content-end mb-3 me-2">
        <select
          className="form-select w-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="desc">IMDb: Yüksekten Düşüğe</option>
          <option value="asc">IMDb: Düşükten Yükseğe</option>
        </select>
      </div>

      <div className="movie-grid">
        {sortedMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <div className="card h-100 movie-card position-relative">
              <img
                src={movie.poster}
                className="img-fluid w-100 rounded-top movie-poster"
                alt={movie.title}
              />

              <button
                className="favorite-btn"
                onClick={() =>
                  isFavorite(movie)
                    ? handleRemoveFavorite(movie.id)
                    : handleAddFavorite(movie)
                }
              >
                {isFavorite(movie) ? (
                  <AiFillHeart size={18} color="red" />
                ) : (
                  <AiOutlineHeart size={18} color="gray" />
                )}
              </button>

              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title movie-title">{movie.title}</h5>
                <p className="card-text movie-info">Tür: {movie.genre}</p>
                <p className="card-text movie-info">Yıl: {movie.year}</p>
                <p className="card-text movie-info">IMDB: {movie.imdbRating}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <Link
                    to={`/movies/${movie.id}`}
                    className="btn btn-primary btn-sm btn-responsive"
                  >
                    Detay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
