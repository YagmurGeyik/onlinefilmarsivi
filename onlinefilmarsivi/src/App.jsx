import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import moviesData from './data/movies';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import GenreFilter from './components/GenreFilter'; // Yeni bileşen
import NavigationBar from './components/Navbar';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Tümü");

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleAddFavorite = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const genres = [...new Set(moviesData.map(movie => movie.genre))];

  const filteredMovies = moviesData.filter(movie =>
  movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
  (selectedGenre === "Tümü" || movie.genre.toLowerCase().includes(selectedGenre.toLowerCase()))
);

  return (
    <BrowserRouter basename="/onlinefilmarsivi">
      <NavigationBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container my-4">
        <GenreFilter
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={filteredMovies}
                handleAddFavorite={handleAddFavorite}
              />
            }
          />
          <Route
            path="/movies/:id"
            element={<MovieDetail movies={moviesData} />}
          />
          <Route
            path="*"
            element={
              <MovieList
                movies={filteredMovies}
                handleAddFavorite={handleAddFavorite}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
