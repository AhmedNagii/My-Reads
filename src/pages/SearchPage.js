import { Link } from "react-router-dom"
import Book from "../components/Book"
import { useState, useEffect } from "react"
import { search } from "../BooksAPI"
import PropTypes from "prop-types"


const SearchPage = ({ updateBookShelf }) => {

  const [userQuery, setUserQuery] = useState("")
  const [results, setResults] = useState([])
  const [hasResult, setHasResult] = useState(false)


  const userHint = userQuery === "" ? "Type something" : 'No results found'

  const updateUserHints = (message) => {


    return <h1 className="no-results">{message}</h1>
  }



  const updateResults = async (query) => {
    try {
      const res = await search(query)
      if (res && res.length > 0) {
        setResults(res)
        setHasResult(true)
      }
      else {
        setHasResult(false)
        setResults([])
      }
    } catch (e) {
      console.log(e)
    }

  }

  const handelChnage = (query) => { setUserQuery(query) }
  useEffect(() => {
    if (userQuery.length > 0 && typeof userQuery === "string") {
      updateResults(userQuery.trim())
    }

  }, [userQuery, results])

  return (<div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/"> Close </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={userQuery}
          onChange={(e) => handelChnage(e.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">

      {hasResult ? <ol className="books-grid">
        {results.map((book) => {
          return <Book
            key={book.id}
            bookData={book}
            bookshelf={book.shelf ? book.shelf : "none"}
            updateBookShelf={updateBookShelf} />
        })}

      </ol> : updateUserHints(userHint)}
    </div>
  </div>)
}


SearchPage.propTypes = {

  updateBookShelf: PropTypes.func.isRequired
}

export default SearchPage