import React from "react";
import "./NavBar.scss";

const NavBar = ({isClicked}) => {
  
  const handleClick = (e) => {
    const homeBtn = document.querySelector(".fa-book");
    const addBtn = document.querySelector(".fa-plus-circle");

    if(e.target.className.includes("fa-book")) {
      homeBtn.classList.add("active");
      homeBtn.classList.remove("inactive");
      addBtn.classList.remove("active");
      addBtn.classList.add("inactive");
    } else if (e.target.className.includes("fa-plus-circle")) {
      addBtn.classList.add("active");
      addBtn.classList.remove("inactive");
      homeBtn.classList.remove("active");
      homeBtn.classList.add("inactive");
    }
  }

  return (
    <nav className="nav-bar">
      <button className="nav-bar__btn home-btn">
        <i className="fas fa-book" onClick={handleClick}></i>
      </button>
      <button className="nav-bar__btn add-btn">
        <i className="fas fa-plus-circle" onClick={handleClick}></i>
      </button>
    </nav>
  )
}

export default NavBar;