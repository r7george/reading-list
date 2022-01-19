import React from "react";
import "./NavBtn.scss";

const NavButton = ({isClicked, handleClick, btnType}) => {
  
  let btnClassName = "nav-bar__btn";
  let btnIClassName = "fas";

  if(btnType === "book") {
    btnClassName += " home-btn";
    btnIClassName += " fa-book";
  } else if(btnType === "plus") {
    btnClassName += " add-btn";
    btnIClassName += " fa-plus-circle";
  }

  return (
    <button className={btnClassName} onClick={isClicked}>
      <i className={btnIClassName} onClick={handleClick}></i>
    </button>
  )
}

export default NavButton;