import Bookshelf from "./Bookshelf"
import {Link} from "react-router-dom"

const BooksList = ({showSearchPage, setShowSearchpage}) => {
return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
      

<Bookshelf/>
<Bookshelf/>
<Bookshelf/>
   
      </div>
    </div>
    <div className="open-search">
      <Link  to= "/search" >Add a book</Link>
    </div>
  </div>
)
}

export default BooksList