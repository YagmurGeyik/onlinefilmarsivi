import React from 'react';
import '../styles/MovieList.css';

function MovieList({ movies, handleAddFavorite }) {
  return (
    <div className="row">
      {movies.map(movie => (
        <div key={movie.id} className="col-6 col-sm-4 col-md-2 mb-4">
  <div className="card h-100 movie-card">
    <img
  src={movie.poster}
  className="img-fluid w-100 rounded-top"
  style={{ objectFit: "cover", objectPosition: "center" }}
  alt={movie.title}
/>

    <div className="card-body d-flex flex-column justify-content-between">
      <h5 className="card-title">{movie.title}</h5>
      <p className="card-text">Tür: {movie.genre}</p>
      <p className="card-text">Yıl: {movie.year}</p>
      <p className="card-text">IMDB: {movie.imdbRating}</p>
      <div className="d-flex justify-content-between mt-auto">
        <button className="btn btn-primary">Detay</button>
        <button
          className="btn btn-warning"
          onClick={() => handleAddFavorite(movie)}
        >
          Favori Ekle
        </button>
      </div>
    </div>
  </div>
</div>

      ))}
    </div>
  );
}

export default MovieList;
