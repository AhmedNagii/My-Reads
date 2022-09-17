import "./App.css";
import SearchPage from "./pages/SearchPage"
import HomePage from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import { getAll, update } from "./BooksAPI"
import CheckConnection from "./components/CheckConnection";

function App() {


  const [allBooks, setAllBooks] = useState([])

  const updateBookShelf = async (bookToChange, shelf) => {
    
    let hasTheBook = true;
    
    
    if(allBooks.length > 0){
      hasTheBook=  allBooks.some(book => book.id !== bookToChange.id)
    }
    
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
     <CheckConnection>
      <Routes>
        <Route path="/" element={
          <HomePage
            allBooks={allBooks}
            updateBookShelf={updateBookShelf}
          />}></Route>
        <Route path="/search"
          element={<SearchPage updateBookShelf={updateBookShelf} />
          }></Route>
      </Routes>
      </CheckConnection>
    </div>
  );
}

export default App;
