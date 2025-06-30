import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import moviesData from './data/movies';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import NavigationBar from './components/NavBar';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleAddFavorite = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BrowserRouter basename="/onlinefilmarsivi">
      <NavigationBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container my-4">
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
