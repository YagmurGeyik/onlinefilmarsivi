import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MovieDetail.css';

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return (
      <div className="container mt-5">
        <h2>Film bulunamadı.</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate(-1)}
        >
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ← Geri Dön
      </button>
      <div className="row align-items-start">
        <div className="col-md-4 mb-4">
          <img
            src={movie.poster}
            alt={movie.title}
            className="img-fluid rounded shadow movie-detail-img"
          />
        </div>
        <div className="col-md-8">
          <h2 className="mb-3">{movie.title} ({movie.year})</h2>
          <p><strong>IMDB Puanı:</strong> {movie.imdbRating}</p>
          <p><strong>Tür:</strong> {movie.genre}</p>
          <p><strong>Ülke:</strong> {movie.country}</p>
          <p><strong>Süre:</strong> {movie.duration}</p>
          <p><strong>Yönetmen:</strong> {movie.director}</p>
          <p><strong>Oyuncular:</strong> {movie.cast.join(', ')}</p>
          <p><strong>Özet:</strong> {movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
