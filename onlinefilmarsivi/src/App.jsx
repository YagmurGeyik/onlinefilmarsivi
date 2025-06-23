import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import moviesData from './data/movies';
import MovieList from './components/MovieList';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavigationBar />
      <div className="container">
        <h1 className="my-4 text-center">Online Film Arşivi</h1>

        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Film Ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <MovieList movies={filteredMovies} />
      </div>
      <Footer />
    </>
  );
}

export default App;
