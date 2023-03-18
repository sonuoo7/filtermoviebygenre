import React from "react";

const GenreFilter = ({ genres, onGenreSelect }) =>{
  return (<>
        <h1>Top 15 Movies Of All Time</h1>
    <div className="genre-filter">
      <p>Filter by Genre:</p>
      <div className="buttons">
        {genres.map((genre) => (
            <button key={genre} onClick={() => onGenreSelect(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
        </>
  );
}

export default GenreFilter;
