import Book from "./Book"
import PropTypes from "prop-types"
const Bookshelf = ({ shelfData, title, updateBookShelf }) => {

  return (
    <div className="bookshelf" key={title}>
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            shelfData.map((book) => {
              return <Book
               key={book.id} 
               bookData={book} 
              
               updateBookShelf={updateBookShelf}/>
            })
          }
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  shelfData: PropTypes.array.isRequired ,
  title: PropTypes.string.isRequired ,
  updateBookShelf: PropTypes.func.isRequired, 
}

export default Bookshelf

