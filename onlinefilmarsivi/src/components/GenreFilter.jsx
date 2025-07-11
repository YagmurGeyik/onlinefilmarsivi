// GenreFilter.jsx
import React from "react";
import "../styles/GenreFilter.css";

function GenreFilter({ genres, selectedGenre, setSelectedGenre }) {
  return (
    <div className="genre-sidebar">
      <h3 className="sidebar-title">Türlerine Göre Filmler</h3>
      <div className="genre-list">
        <button
          className={`genre-button ${selectedGenre === "Tümü" ? "active" : ""}`}
          onClick={() => setSelectedGenre("Tümü")}
        >
          Tümü
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-button ${selectedGenre === genre ? "active" : ""}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
