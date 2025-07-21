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
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Tümü");
  const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const moviesPerPage = 12;

  const genreList = [
    "Aile Filmleri",
    "Aksiyon Filmleri",
    "Animasyon Filmleri",
    "Belgesel Filmleri",
    "Bilim Kurgu Filmleri",
    "Biyografi Filmleri",
    "Dram Filmleri",
    "Fantastik Filmleri",
    "Film-Noir Filmleri",
    "Game-Show Filmleri",
    "Gerilim Filmleri",
    "Gizem Filmleri",
    "Komedi Filmleri",
    "Korku Filmleri",
    "Macera Filmleri",
    "Müzik Filmleri",
    "Polisiye Filmleri",
    "Reality Filmleri",
    "Reality-TV Filmleri",
    "Romantik Filmleri",
    "Savaş Filmleri",
    "Science Fiction Filmleri",
    "Short Filmleri",
    "Spor Filmleri",
    "Suç Filmleri",
    "Tarih Filmleri",
    "TV Movie Filmleri",
    "Western Filmleri",
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);

    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

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

  const filteredMovies = moviesData.filter((movie) => {
    const titleMatch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const genreArray = movie.genre
      .split(",")
      .map((g) => g.trim().toLowerCase());

    const genreMatch =
      selectedGenre === "Tümü" ||
      genreArray.some(
        (g) =>
          selectedGenre.toLowerCase().includes(g) ||
          g.includes(selectedGenre.toLowerCase())
      );

    return titleMatch && genreMatch;
  });

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

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
          onLoginClick={() => setShowLoginModal(true)}
          onRegisterClick={() => setShowRegisterModal(true)}
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
                        genres={genreList}
                        selectedGenre={selectedGenre}
                        setSelectedGenre={setSelectedGenre}
                        toggleFilter={toggleFilter}
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

        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onSwitchToRegister={() => {
              setShowLoginModal(false);
              setShowRegisterModal(true);
            }}
          />
        )}
        {showRegisterModal && (
          <RegisterModal onClose={() => setShowRegisterModal(false)} />
        )}

        <ScrollToTopButton />
        <BottomNav toggleFilter={toggleFilter} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
