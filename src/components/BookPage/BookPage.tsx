import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchBook } from '../../store/reducers/book/bookActionCreator';
import bookImage from '../../images/book.svg';
import Page404 from '../Page404/Page404';

const BookPage = () => {

  const { bookId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBook(bookId!));
  }, []);

  const { isLoading, error, book } = useAppSelector(state => state.book);

  if (!book && !isLoading) return <Page404 />;

  return (
    <section className='book-page'>
      {
        isLoading ?
          <p>loading...</p> :
          book ?
            <>
              <div className='book-page__picture'>
                <img
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ?
                      book.volumeInfo.imageLinks?.thumbnail :
                      bookImage
                  }
                  alt={book?.volumeInfo.title}
                  className='book-page__image' />
              </div>
              <div className='book-page__content'>
                <p className='book-page__categories'>
                  {
                    book?.volumeInfo.categories ?
                      book?.volumeInfo.categories[0] :
                      ''
                  }
                </p>
                <h1 className='book-page__title'>
                  {book?.volumeInfo.title}
                </h1>
                <p className='book-page__authors'>
                  {book?.volumeInfo.authors}
                </p>
                {
                  book?.volumeInfo.subtitle ?
                    <p className='book-page_description'>
                      {book?.volumeInfo.subtitle}
                    </p> : null
                }
              </div>
            </>
            : <p>{error}</p>
      }
    </section>
  )
};

export default BookPage;