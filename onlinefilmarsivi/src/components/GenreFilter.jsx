import React, { useEffect, useState } from "react";
import "../styles/GenreFilter.css";

function GenreFilter({ genres, selectedGenre, setSelectedGenre, toggleFilter }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="genre-sidebar genre-filter show-mobile-filter">
      {isMobile && (
        <button className="mobile-filter-close" onClick={toggleFilter}>
          ✕
        </button>
      )}
      <h3 className="sidebar-title">Türlerine Göre Filmler</h3>
      <div className="genre-list">
        <button
          className={`genre-button ${selectedGenre === "Tümü" ? "active" : ""}`}
          onClick={() => {
            setSelectedGenre("Tümü");
            if (isMobile) toggleFilter();
          }}
        >
          Tümü
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-button ${selectedGenre === genre ? "active" : ""}`}
            onClick={() => {
              setSelectedGenre(genre);
              if (isMobile) toggleFilter();
            }}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
