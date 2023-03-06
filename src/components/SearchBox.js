import React, { useState } from "react";

// A functional component that displays a search box for filtering products.
const SearchBox = (props) => {
  // State is used to track the search query entered by the user.
  const [searchQuery, setSearchQuery] = useState("");

  // Event handler for the input field's "change" event.
  const handleChange = (e) => {
    // Sets the search query state to the value of the input field.
    setSearchQuery(e.target.value);
  };

  // Event handler for the search button's "click" event.
  const handleSearchClick = () => {
    props.handleSearch(searchQuery);
  };

  // Renders an input field and a search button.
  return (
    <div className="App">
      <input
        className="list"
        type="text"
        placeholder="Sök på titel, beskrivning, tillbehör eller pris..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button onClick={handleSearchClick}>Sök</button>
    </div>
  );
};

// Exports the SearchBox component to be used in other parts of the application.
export default SearchBox;
