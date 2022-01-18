import "./BookForm.scss";
import React, {useState} from "react";

const BookForm = () => {
  const [book, setBook] = useState({
    addedBy : "",
    bookName : "",
    author : "",
    genres : "",
    description : ""
  })

  return (
    <form className="book-form">
      <input placeholder="Book Name" type="text" className="book-form__input-text" />
      <input placeholder="Author" type="text" className="book-form__input-text" />
      <input placeholder="Genres" type="text" className="book-form__input-text" />
      <input placeholder="Added By" type="text" className="book-form__input-text" />
      <textarea placeholder="Description" cols="30" rows="4" className="book-form__textarea"></textarea>
      <button type="submit" className="book-form__btn">Submit</button>
    </form>
  )
}

export default BookForm;