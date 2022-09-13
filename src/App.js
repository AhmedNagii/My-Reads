import "./App.css";
import SearchPage from "./components/SearchPage"
import BooksList from "./components/BooksList"
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import { getAll } from "./BooksAPI"

function App() {


const [allBooks, setAllBooks]  = useState([])

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
        <BooksList allBooks = {allBooks}
         />}></Route>
        <Route path="/search" 
        element={<SearchPage allBooks = {allBooks}/>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
