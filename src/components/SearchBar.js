import React from "react";

function SearchBar(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input "
        placeholder="Search memes..."
        onChange={(event) => props.onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
