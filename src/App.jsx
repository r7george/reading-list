import React, {useState, useEffect} from "react";

import './App.scss';
import './assets/styles/_normalise.scss';

import Header from './components/Header/Header';
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AddBook from "./containers/AddBook/AddBook";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddBook, setShowAddBook] = useState(false);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/reading-list")
      .then(response => response.json())
      .then(json => setBooks(json))
      .catch(err => console.log(err))
  }, [])
  
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
    const homeBtn = document.querySelector(".fa-book");
    const addBtn = document.querySelector(".fa-plus-circle");

    if(e.target.className.includes("fa-book")) {
      homeBtn.classList.add("active");
      homeBtn.classList.remove("inactive");
      addBtn.classList.remove("active");
      addBtn.classList.add("inactive");
      setShowAddBook(false);
    } else if (e.target.className.includes("fa-plus-circle")) {
      addBtn.classList.add("active");
      addBtn.classList.remove("inactive");
      homeBtn.classList.remove("active");
      homeBtn.classList.add("inactive");
      setShowAddBook(true);
    }
  }

  return (
    <div className="App">
      <Header handleInput={handleInput} handleClick={handleClick} />
      {showAddBook ? <AddBook/> : <Home bookData={filteredBookArr} /> }
      <NavBar handleClick={handleClick}/>
    </div>
  );
}

export default App;
