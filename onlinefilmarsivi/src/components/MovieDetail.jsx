import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from '../data/movies';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return (
      <div className="container mt-5">
        <h2>Film bulunamadı.</h2>
        <Link to="/" className="btn btn-primary mt-3">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-secondary mb-4">← Geri Dön</Link>
      <div className="row">
        <div className="col-md-4">
          <img src={movie.poster} alt={movie.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
          <h2>{movie.title} ({movie.year})</h2>
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
