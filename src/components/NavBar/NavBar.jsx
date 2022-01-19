import React from "react";
import NavButton from "../NavBtn/NavBtn";
import "./NavBar.scss";

const NavBar = ({handleClick}) => {

  return (
    <nav className="nav-bar">
      <NavButton handleClick={handleClick} btnType={"book"} />
      <NavButton handleClick={handleClick} btnType={"plus"} />
    </nav>
  )
}

export default NavBar;