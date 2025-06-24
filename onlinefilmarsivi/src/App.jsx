import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import moviesData from './data/movies';
import MovieList from './components/MovieList';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

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
    <>
      <NavigationBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container my-4">
       <div className="row">
        <div className="col-12">
         <MovieList movies={filteredMovies} handleAddFavorite={handleAddFavorite} />
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}

export default App;
