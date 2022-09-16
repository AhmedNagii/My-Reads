
import PropTypes from "prop-types"
import nocover from '../imgs/nocover.png';
import { useState } from 'react';

const Book = ({ bookData, updateBookShelf }) => {
  const [selectedOptions, setSelectedOptions] = useState();
 


  const handleSelect = (event) => {
    const selectedShelf = event.target.value
    setSelectedOptions(selectedShelf);
    updateBookShelf(bookData, selectedShelf)
   
    
  }

  const renderImage = () => {
    const imageUrl = bookData.imageLinks.smallThumbnail;
    if(imageUrl){
      return imageUrl
    }else{
      return `${nocover}`
    }
  }


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
            <select value={selectedOptions} onChange={handleSelect}>
              <option value="none" disabled>Move to...</option>
              <option value="none" disabled></option>
            
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
  updateBookShelf: PropTypes.func.isRequired
}

export default Book;