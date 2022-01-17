import "./BookInfoTile.scss";
import React from "react";

const BookInfoTile = ({title, author, genres, description, addedBy}) => {
  const capitaliseWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  }

  const titleUC = capitaliseWord(title);
  const authorUC = capitaliseWord(author);
  const genresUC = capitaliseWord(genres);
  const descUC = capitaliseWord(description);
  const addedUC = capitaliseWord(addedBy);

  return  (
    <div className="book-info-tile">
      <h3 className="book-info-tile__title">{titleUC}</h3>
      <h4 className="book-info-tile__author">{authorUC}</h4>
      <h5 className="book-info-tile__genres">{genresUC}</h5>
      <p className="book-info-tile__desc">{descUC}</p>
      <h6 className="book-info-tile__addedBy">{addedUC}</h6>
    </div>
  )
}

export default BookInfoTile;