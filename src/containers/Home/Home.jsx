import "./Home.scss";
import React, {useState} from "react";
import BookTile from "../../components/BookTile/BookTile";
import BookInfoTile from "../../components/BookInfoTile/BookInfoTile";

const Home = ({bookData}) => {

  const [showBookInfo, setShowBookInfo] = useState(false);
  const [bookInfo, setBookInfo] = useState({});


  const handleClick = (e) => {
    setShowBookInfo(!showBookInfo);
    const book = bookData.filter((book) => {
      return book.bookName == e.target.childNodes[0].innerText;
    });
    setBookInfo(book[0]);
  }

  const handleTileClick = () => {
    setShowBookInfo(!showBookInfo);
  }

  const BookTilesJSX = bookData.map((book, index) => {
    return <BookTile key={index} title={book.bookName} author={book.author} genres={book.genres} handleClick={handleClick} />
  });

  const homeJSX = (
    <>
      <h2 className="home__header">Reading List</h2>
      <div className="book-tiles">{BookTilesJSX}</div>
    </>
  );

  const bookInfoJSX = (
    <BookInfoTile title={bookInfo.bookName} author={bookInfo.author} genres={bookInfo.genres} description={bookInfo.description} addedBy={bookInfo.addedBy} handleTileClick={handleTileClick} />
  );

  return (
    <section className="home">
      {showBookInfo ? bookInfoJSX : homeJSX}
    </section>
  )
}

export default Home;