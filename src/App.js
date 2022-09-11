import "./App.css";
import { useState } from "react";
import SearchPage from "./components/SearchPage"
import BooksList from "./components/BooksList"

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

   const updateCurrentPage = () => {
    setShowSearchpage(!showSearchPage)
   }

  return (
    <div className="app">
      {showSearchPage ? 
      <SearchPage showSearchPage={showSearchPage} setShowSearchpage= {updateCurrentPage} />
       : 
    <BooksList showSearchPage={showSearchPage} setShowSearchpage= {updateCurrentPage} />
      }
    </div>
  );
}

export default App;
