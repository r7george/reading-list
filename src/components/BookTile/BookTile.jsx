import React from "react";
import "./BookTile.scss";

const BookTile = ({title, author, genres, handleClick}) => {
  
  return (
    <div className="book-tile" onClick={handleClick}>
      <h3 className="book-tile__title" onClick={handleClick}>{title}</h3>
      <h5 className="book-tile__author" onClick={handleClick}>{author}</h5>
      <h6 className="book-tile__genres" onClick={handleClick}>{genres}</h6>
    </div>
  )
}

export default BookTile;