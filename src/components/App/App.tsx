import { ChangeEvent, useEffect, useState } from 'react';
import Form from '../Form/Form';
import Layout from '../Layout/Layout';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Books from '../Books/Books';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Book from '../Book/Book';
import { fetchBooks } from '../../store/reducers/books/booksActionCreator';
import PaginationButton from '../PaginationButton/PaginationButton';
import BookPage from '../BookPage/BookPage';
import Page404 from '../Page404/Page404';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSortFilter, setSelectedSortFilter] = useState('relevance');
  const [startIndex, setStartIndex] = useState(1);

  const { isLoading, error, books, booksCount } = useAppSelector(state => state.books);
  
  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  useEffect(() => {
    if (startIndex === 1) return
    dispatch(fetchBooks(searchQuery, selectedCategory, startIndex, selectedSortFilter));
  }, [startIndex]);

  const handleSetSearchQuery = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  const handleSelectCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSelectFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortFilter(e.target.value);
  };

  const handleFetchBooks = () => {
    navigation('/');
    dispatch(fetchBooks(searchQuery, selectedCategory, startIndex, selectedSortFilter));
  };

  const handleSetStartIndex = () => {
    setStartIndex(prev => prev + 30);
  };

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={
          <Layout>
            <Form
              searchQuery={searchQuery}
              handleSetSearchQuery={handleSetSearchQuery}
              handleSubmitForm={handleFetchBooks}
              handleSelectCategory={handleSelectCategory}
              handleSelectFilter={handleSelectFilter}
              selectedCategory={selectedCategory}
              selectedSortFilter={selectedSortFilter}
            />
            <p className='main__books-results'>{!booksCount ? '' : `Found ${booksCount} results`}</p>
            <Books>
              {
                error ?
                  <p>{error}</p> :
                  isLoading ?
                    <p className='main__text'>Loading...</p> :
                    books && books.length > 0 ?
                      books.map((book, index) => {
                        return (
                          <Book key={book.id + index} book={book} />
                        )
                      })
                      : <p className='main__text'>No results</p>
              }
            </Books>
            {
              books && books.length > 0 ?
                <PaginationButton
                  isHidden={!!error || isLoading}
                  handleSetStartIndex={handleSetStartIndex}
                /> :
                <PaginationButton
                  isHidden={true}
                  handleSetStartIndex={handleSetStartIndex}
                />
            }

          </Layout>
        } />

        <Route path='/:bookId' element={
          <Layout>
            <Form
              searchQuery={searchQuery}
              handleSetSearchQuery={handleSetSearchQuery}
              handleSubmitForm={handleFetchBooks}
              handleSelectCategory={handleSelectCategory}
              handleSelectFilter={handleSelectFilter}
              selectedCategory={selectedCategory}
              selectedSortFilter={selectedSortFilter}
            />
            <BookPage />
          </Layout>
        } />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
