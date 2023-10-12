import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './reducers/books/booksSlice';
import bookSlice from './reducers/book/bookSlice';

export const baseUrl = 
'https://www.googleapis.com/books/v1/volumes/?key=AIzaSyA8NKsv6agJJ9mbnneSdYehqSF0lCmxpU8&maxResults=30';

export const booksParams = '&fields=totalItems,items(id,volumeInfo(publishedDate,title,subtitle,authors,categories,imageLinks(thumbnail)))';

export const bookParams = '?fields=id,volumeInfo(title,subtitle,authors,categories,imageLinks(thumbnail))';

export const store = configureStore({
  reducer: {
    books: booksSlice,
    book: bookSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
