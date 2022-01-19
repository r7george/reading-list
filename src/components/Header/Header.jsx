import React from "react";
import "./Header.scss";

import SearchBox from "../SearchBox/SearchBox";
import NavButton from "../NavBtn/NavBtn";

const Header = ({handleInput, handleClick}) => {
  return (
    <div className="header">
      <h1 className="header__heading">Shelf Indulgence</h1>
      <div className="header__interactive-features">
        <NavButton handleClick={handleClick} btnType={"book"} className="header__book-btn"/>
        <SearchBox placeholder="Search by title" handleInput={handleInput} />
        <NavButton handleClick={handleClick} btnType={"plus"} className="header__plus-btn"/>
      </div>
    </div>
  )
}

export default Header;