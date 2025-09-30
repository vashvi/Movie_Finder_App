import React, { useState, useEffect } from 'react';
import './Movies.css';

function Movies({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const API_KEY = "fa1382bba58f4e98b2e075dca86f2de3"; 
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [API_URL]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='card'>
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-overlay">
              <h2>{movie.title}</h2>
              <p>Release: {movie.release_date}</p>
              <p>Rating: {movie.vote_average}</p>
              <p>{movie.overview}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
