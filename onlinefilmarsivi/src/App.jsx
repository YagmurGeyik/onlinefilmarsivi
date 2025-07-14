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
import ScrollToTopButton from "./components/ScrollToTopButton";
import Pagination from "./components/Pagination";
import BottomNav from "./components/BottomNav";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Tümü");
  const [theme, setTheme] = useState("light");

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

  // LocalStorage'dan tema ve favorileri yükle
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);

    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Temayı body'e uygula
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Tema değiştir
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Favorilere ekle/çıkar
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

  // Filtreleme
  const genres = [...new Set(moviesData.map((movie) => movie.genre))];

  const filteredMovies = moviesData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre === "Tümü" ||
        movie.genre.toLowerCase().includes(selectedGenre.toLowerCase()))
  );

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Filtre panelini aç/kapat
  const toggleFilter = () => {
    const filterSidebar = document.querySelector(".genre-filter");
    if (filterSidebar) {
      filterSidebar.classList.toggle("show-mobile-filter");
    }
  };

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
                  <div className="d-flex gap-3">
                    <div className="genre-filter" style={{ minWidth: "220px" }}>
                      <GenreFilter
                        genres={genres}
                        selectedGenre={selectedGenre}
                        setSelectedGenre={setSelectedGenre}
                        toggleFilter={toggleFilter} // Mobil filtre kapansın
                      />
                    </div>
                    <div className="flex-grow-1">
                      <MovieList
                        movies={currentMovies}
                        handleAddFavorite={handleAddFavorite}
                        handleRemoveFavorite={handleRemoveFavorite}
                        favorites={favorites}
                      />
                    </div>
                  </div>

                  <Pagination
                    totalMovies={filteredMovies.length}
                    moviesPerPage={moviesPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
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

        <ScrollToTopButton />

        <BottomNav toggleFilter={toggleFilter} />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
