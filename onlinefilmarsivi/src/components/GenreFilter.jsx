import React from "react";
import "../styles/GenreFilter.css";

function GenreFilter({ genres, selectedGenre, setSelectedGenre }) {
  return (
    <div className="genre-filter">
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
  );
}

export default GenreFilter;
