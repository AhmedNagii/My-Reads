import { Link } from "react-router-dom"
import Book from "../components/Book"
import { useState, useEffect } from "react"
import { search } from "../BooksAPI"
import PropTypes from "prop-types"


const SearchPage = ({ updateBookShelf }) => {

  const [userQuery, setUserQuery] = useState("")
  const [results, setResults] = useState([])
  const [hasResult, setHasResult] = useState(false)



  const updateUserHints = () => {
    const message = 
    userQuery === "" || results.length === 0 ? "Type something" : 'No results found'
    return <h1 className="no-results">{message}</h1>
  }



  const updateResults = async (query) => {
//if(query === "" || typeof query !== "string") return;

    try {
      const res = await search(query)
      console.log(res)
      if (res && res.length > 0) {
        setResults(res)
        setHasResult(true)
      }
      else  {
        setHasResult(false)
        setResults([])
       
      }
    } catch (error) {
      // setUserHint(error)
    }
  }

  const handelChnage = (query) => { setUserQuery(query) }
  useEffect(() => {
    updateResults(userQuery.trim())
  }, [userQuery])

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
          return <Book key={book.id} bookData={book}
            updateBookShelf={updateBookShelf} />
        })}

      </ol> : updateUserHints()}
    </div>
  </div>)
}


SearchPage.propTypes = {
 
  updateBookShelf: PropTypes.func.isRequired
}

export default SearchPage