import Bookshelf from "./Bookshelf"
import { Link } from "react-router-dom"


const BooksList = ({ allBooks }) => {

  const currentlyReadingShelf = allBooks.filter(book => book.shelf === "currentlyReading")
  const wantToReadShelf = allBooks.filter(book => book.shelf === "wantToRead")
  const readShelf = allBooks.filter(book => book.shelf === "read")

  const allShelfs = [
    {
      shelfData: currentlyReadingShelf,
      shelfTitle: "currently Reading"
    },
    {
      shelfData: wantToReadShelf,
      shelfTitle: "Want to read"
    },
    {
      shelfData: readShelf,
      shelfTitle: "read"
    }]

  const creatBookShelfs = () => {
    return allShelfs.map((shelf) => {
      return <Bookshelf key={shelf.name} shelfData={shelf.shelfData} title={shelf.shelfTitle} />
    })
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>

          {
            creatBookShelfs()
          }
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" >Add a book</Link>
      </div>
    </div>
  )
}

export default BooksList