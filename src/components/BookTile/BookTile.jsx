import React from "react";
import "./BookTile.scss";

const BookTile = ({title, author, genres, handleClick}) => {
  
  return (
    <div className="book-tile" onClick={handleClick}>
      <h3 className="book-tile__title">{title}</h3>
      <h5 className="book-tile__author">{author}</h5>
      <h6 className="book-tile__genres">{genres}</h6>
    </div>
  )
}

export default BookTile;