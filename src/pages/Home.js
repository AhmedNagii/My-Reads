import Bookshelf from "../components/Bookshelf"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const HomePage = ({ allBooks , updateBookShelf}) => {

  const currentlyReadingShelf = allBooks.filter(book => book.shelf === "currentlyReading")
  const wantToReadShelf = allBooks.filter(book => book.shelf === "wantToRead")
  const readShelf = allBooks.filter(book => book.shelf === "read")

  const allShelfs = [
    {
      shelfData: currentlyReadingShelf,
      shelfTitle: "Currently Reading"
    },
    {
      shelfData: wantToReadShelf,
      shelfTitle: "Want to read"
    },
    {
      shelfData: readShelf,
      shelfTitle: "Read"
    }]



  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {allShelfs.map((shelf) => {
            return <Bookshelf
             key={shelf.shelfTitle}
              shelfData={shelf.shelfData} 
              title={shelf.shelfTitle}
              updateBookShelf={updateBookShelf} />
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" >Add a book</Link>
      </div>
    </div>
  )
}


HomePage.propTypes = {
  allBooks: PropTypes.array.isRequired , 
  updateBookShelf: PropTypes.func.isRequired
}

export default HomePage