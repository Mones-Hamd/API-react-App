import { useState } from 'react';
import SearchIcon from '../search.svg';

const Search = ({ onSearch }) => {
  const [movieText, setMovieText] = useState('');
  const onClick = (e) => {
    onSearch(movieText);
  };
  return (
    <div className="search">
      <input
        placeholder="search for a movie"
        value={movieText}
        onChange={(e) => {
          setMovieText(e.target.value);
        }}
      />
      <img src={SearchIcon} alt="search" onClick={onClick} />
    </div>
  );
};

export default Search;
