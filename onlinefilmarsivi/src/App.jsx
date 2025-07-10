import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import moviesData from "./data/movies";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Footer from "./components/Footer";
import GenreFilter from "./components/GenreFilter";
import NavigationBar from "./components/Navbar";
import Favorite from "./components/Favorite";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Tümü");
  const [theme, setTheme] = useState("light");

  // Temayı ve favorileri localStorage'tan yükle
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);

    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Temayı <body>'ye uygula
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleAddFavorite = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const handleRemoveFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const genres = [...new Set(moviesData.map((movie) => movie.genre))];

  const filteredMovies = moviesData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre === "Tümü" ||
        movie.genre.toLowerCase().includes(selectedGenre.toLowerCase()))
  );

  return (
    <div className="app-wrapper">
      <BrowserRouter basename="/onlinefilmarsivi">
        <NavigationBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <div className="container app-content my-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <GenreFilter
                    genres={genres}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                  />
                  <MovieList
                    movies={filteredMovies}
                    handleAddFavorite={handleAddFavorite}
                    handleRemoveFavorite={handleRemoveFavorite}
                    favorites={favorites}
                  />
                </>
              }
            />
            <Route
              path="/movies/:id"
              element={<MovieDetail movies={moviesData} />}
            />
            <Route
              path="/favorites"
              element={
                <Favorite
                  favorites={favorites}
                  handleAddFavorite={handleAddFavorite}
                  handleRemoveFavorite={handleRemoveFavorite}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
