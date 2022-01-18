import React from "react";
import BookForm from "../../components/BookForm/BookForm";
import './AddBook.scss';

const AddBook = () => {
  return (
    <section className="add-book">
      <div className="formatting-div">
        <h2 className="add-book__header">Add to Reading List</h2>
        <BookForm />
      </div>
    </section>
  )
}

export default AddBook;