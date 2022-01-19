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

  const handleSubmit = (e) => {
    fetch("http://localhost:8080/reading-list/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
    e.target.reset();
  }
  
  return (
    <form className="book-form" onSubmit={handleSubmit}>
      
      <input placeholder="Book Name" type="text" className="book-form__input-text" onInput={(e) => {
        setBook({ ...book, bookName: e.target.value})
      }}/>
      
      <input placeholder="Author" type="text" className="book-form__input-text" onInput={(e) => {
        setBook({ ...book, author: e.target.value});
      }}/>
      
      <input placeholder="Genres" type="text" className="book-form__input-text" onInput={(e) => {
        setBook({ ...book, genres: e.target.value});
      }} />

      <input placeholder="Added By" type="text" className="book-form__input-text" onInput={(e) => {
        setBook({ ...book, addedBy: e.target.value});
      }} />

      <textarea placeholder="Description" cols="30" rows="4" className="book-form__textarea" onInput={(e) => {
        setBook({ ...book, description: e.target.value});
      }} ></textarea>
      
      <button type="submit" className="book-form__btn">Submit</button>
    </form>
  )
}

export default BookForm;