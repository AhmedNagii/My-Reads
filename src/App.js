import "./App.css";
import SearchPage from "./pages/SearchPage"
import HomePage from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import { getAll, update } from "./BooksAPI"

function App() {


  const [allBooks, setAllBooks] = useState([])

  const chnageBookSgelf = async (bookToChange, shelf) => {
    const hasTheBook = allBooks.some(book => book.id !== bookToChange.id)
    if (hasTheBook) {
      await update(bookToChange, shelf)
    } else {
      return;
    }
  }

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await getAll()
      setAllBooks(res)
    }
    getAllBooks()

  })



  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <HomePage
            allBooks={allBooks}
            updateBookShelf={chnageBookSgelf}
          />}></Route>
        <Route path="/search"
          element={<SearchPage updateBookShelf={chnageBookSgelf} />
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
