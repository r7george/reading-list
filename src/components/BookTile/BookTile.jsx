import React from "react";
import "./BookTile.scss";

const BookTile = ({title, author, genres}) => {
  
  return (
    <div className="book-tile">
      <h3 className="book-tile__title">{title}</h3>
      <h5 className="book-tile__author">{author}</h5>
      <h6 className="book-tile__genres">{genres}</h6>
    </div>
  )
}

export default BookTile;