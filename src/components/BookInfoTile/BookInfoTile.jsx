import "./BookInfoTile.scss";
import React from "react";

const BookInfoTile = ({title, author, genres, description, addedBy, handleTileClick}) => {
  const capitaliseWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  }

  const titleUC = capitaliseWord(title);
  const authorUC = capitaliseWord(author);
  const genresUC = capitaliseWord(genres);
  const descUC = capitaliseWord(description);
  const addedUC = capitaliseWord(addedBy);

  return  (
    <div className="book-info-tile" onClick={handleTileClick}>
      <h3 className="book-info-tile__title">{titleUC}</h3>
      <h4 className="book-info-tile__author">{authorUC}</h4>
      <h5 className="book-info-tile__genres">{genresUC}</h5>
      <p className="book-info-tile__desc">{descUC}</p>
      <h6 className="book-info-tile__addedBy">Created by: {addedUC}</h6>
      <p className="book-info-tile__note">Please click again to go back to Reading List</p>
    </div>
  )
}

export default BookInfoTile;