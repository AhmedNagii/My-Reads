import Bookshelf from "./Bookshelf"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {getAll} from "../BooksAPI"

const BooksList = () => {

const [allBooks , setAllBooks] = useState()

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await getAll()
      setAllBooks(res)
    }

    getAllBooks()
  }, []) 

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