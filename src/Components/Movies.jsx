import React, { useEffect, useState } from "react";
import "./Movies.css";

const Movies = () => {
  const [movieName, setMovieName] = useState("");
  const [movieslist, setMovieslist] = useState();

  const handleMovieName = (e) => {
    setMovieName(e.target.value);
  };

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=758453c1814c5f9451e131aef232b90d&&query=${movieName}`
    );
    const data = await response.json();
    setMovieslist(data);
    setMovieName("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Movie"
        value={movieName}
        onChange={handleMovieName}
      />
      <button className="searchBtn" onClick={handleSearch}>
        Search
      </button>
      {movieslist == null ? (
        <div>Start Searching</div>
      ) : (
        <div>
          {" "}
          {movieslist.results.map((movie) => {
            return (
              <div key={movie.id} className="movieDetails">
                <p> {movie.original_title}</p>
                <p>
                  {" "}
                  Release Date:{" "}
                  {movie.release_date
                    ? movie.release_date
                    : "Not Available"}{" "}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Movies;
