import React from "react";
import "./Header.scss";

import SearchBox from "../SearchBox/SearchBox";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__heading">Shelf Indulgence</h1>
      <SearchBox placeholder="Search by title" />
    </div>
  )
}

export default Header;