import React from "react";
import "./SearchBox.scss";

const SearchBox = ({placeholder, searchTerm, handleInput}) => {

  return (
    <div className="search-box">
      <i class="fas fa-search"></i>
      <input type="text" className="search-box__input" name="searchbox" id="searchbox" onInput={handleInput} placeholder={placeholder}/>
    </div>
  )
}

export default SearchBox;

