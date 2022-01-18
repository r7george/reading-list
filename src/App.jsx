import React, {useState} from "react";

import './App.scss';
import './assets/styles/_normalise.scss';

import books from "./data/books.js";

import Header from './components/Header/Header';
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AddBook from "./containers/AddBook/AddBook";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddBook, setShowAddBook] = useState(false);

  const handleInput = (e) => {
    const cleanInput = e.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  const filteredBookArr = books.filter(book => {
      const bookNameLC = book.bookName.toLowerCase();
      return bookNameLC.includes(searchTerm);
    }
  )
  const handleClick = (e) => {
    if(e.target.className.includes("fa-book")) {
      setShowAddBook(false);
    }else if(e.target.className.includes("fa-plus-circle")) {
      setShowAddBook(true);
    }
  }

  return (
    <div className="App">
      <Header handleInput={handleInput} />
      {showAddBook ? <AddBook/> : <Home bookData={filteredBookArr} /> }
      <NavBar isClicked={handleClick}/>
    </div>
  );
}

export default App;
