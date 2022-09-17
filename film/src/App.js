import './App.css';

import { useEffect, useState } from 'react';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
const url = `http://www.omdbapi.com?apikey=c232e216`;

function App() {
  const [movies, setMovies] = useState([]);

  const onSearch = (searchText) => {
    searchMovie(searchText);
  };

  const searchMovie = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie('batman');
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div>
        <Search onSearch={onSearch} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
