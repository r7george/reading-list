import React from "react";
import "./NavBar.scss";

const NavBar = ({isClicked}) => {
  
  const handleClick = (e) => {

  }

  return (
    <nav className="nav-bar">
      <button className="nav-bar__btn home-btn" onClick={handleClick} >
        <i class="fas fa-book"></i>
      </button>
      <button className="nav-bar__btn add-btn" onClick={handleClick}>
        <i class="fas fa-plus-circle"></i>
      </button>
    </nav>
  )
}

export default NavBar;