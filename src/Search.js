import React from "react";

function Search({searchItems, searchInput}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => searchItems(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;