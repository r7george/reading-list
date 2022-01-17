import "./Home.scss";
import react from "react";
import BookTile from "../../components/BookTile/BookTile";

const Home = ({bookData}) => {

  const BookTilesJSX = bookData.map((book) => {
    console.log(book.bookName);
    console.log(book.author);
    console.log(book.genres);
    return <BookTile title={book.bookName} author={book.author} genres={book.genres} />
  })

  // console.log(bookData);

  return (
    <section className="home">
      <h2 className="home__header">Reading List</h2>
      <div className="book-tiles">{BookTilesJSX}</div>
    </section>
  )
}

export default Home;