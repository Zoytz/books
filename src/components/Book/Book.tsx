import { BookType } from '../../types/types';
import bookImage from '../../images/book.svg';
import { Link } from 'react-router-dom';

const Book = ({ book }: { book: BookType }) => {

  return (
    <li className='book'>
      <Link to={`/${book.id}`} className='book__link'>
        <img
          src={
            book.volumeInfo.imageLinks ?
              book.volumeInfo.imageLinks.thumbnail :
              bookImage
          }
          alt={book.volumeInfo.title}
          className='book__image'
        />
        {
          !book.volumeInfo.categories ?
            null :
            <p className='book__category'>
              {book.volumeInfo.categories[0]}
            </p>
        }
        <h2 className='book__title'>
          {book.volumeInfo.title}
        </h2>
        <p className='book__author'>
          {
            book.volumeInfo.authors ?
              book.volumeInfo.authors.length > 1 ?
                book.volumeInfo.authors.map((author) => {
                  return `${author}, `
                }) :
                book.volumeInfo.authors[0]
              : null
          }
        </p>
      </Link>
    </li>
  )
};

export default Book;