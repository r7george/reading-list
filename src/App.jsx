import React, {useState} from "react";

import './App.scss';
import './assets/styles/_normalise.scss';

import books from "./data/books.js";

import Header from './components/Header/Header';
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    const cleanInput = e.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  const filteredBookArr = books.filter(book => {
      const bookNameLC = book.bookName.toLowerCase();
      return bookNameLC.includes(searchTerm);
    }
  )

  return (
    <div className="App">
      <Header handleInput={handleInput} />
      <Home bookData={filteredBookArr} />
      <NavBar />
    </div>
  );
}

export default App;
