import React from 'react';

function MovieList({ movies, handleAddFavorite }) {
  return (
    <div className="row">
      {movies.map(movie => (
        <div key={movie.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={movie.poster} className="card-img-top" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">Yıl: {movie.year}</p>
              <p className="card-text">IMDB: {movie.imdbRating}</p>
              <div className="d-flex justify-content-between">
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
