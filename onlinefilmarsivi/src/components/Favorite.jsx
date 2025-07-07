import React from "react";
import MovieList from "./MovieList";
import "../styles/MovieList.css";

function Favorite({ favorites, handleAddFavorite, handleRemoveFavorite }) {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Favori Filmlerim</h3>
      {favorites.length > 0 ? (
        <MovieList
          movies={favorites}
          handleAddFavorite={handleAddFavorite}
          handleRemoveFavorite={handleRemoveFavorite}
          favorites={favorites}
        />
      ) : (
        <p>Henüz favori film eklenmedi.</p>
      )}
    </div>
  );
}


export default Favorite;
