
import PropTypes from "prop-types"
import nocover from '../imgs/nocover.png';
import { useState, useEffect } from 'react';

const Book = ({ bookData, bookshelf ,updateBookShelf }) => {
  const [selectedOption, setSelectedOption] = useState(bookshelf?bookshelf : "");
 

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);}

  const renderImage = () => {
    const imageUrl = bookData.imageLinks.smallThumbnail;
    if(imageUrl !== undefined){
      return imageUrl
    }else{
      return nocover
    }
  }

  useEffect(() => {
    if(selectedOption !== ""){
      updateBookShelf(bookData, selectedOption)
    }
   
  }, [selectedOption, bookData, updateBookShelf ])

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `URL(${renderImage()})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={selectedOption}
             onChange={(e) => handleSelect(e)}>
              <option value="none" disabled>Move to...</option>
             
            
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>


        </div>

        <div className="book-title">{bookData.title}</div>
        <div className="book-authors">{bookData.authors}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
  bookData : PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
  bookshelf: PropTypes.string
}

export default Book;