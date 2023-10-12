import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BookType, BooksResponseType } from '../../../types/types';

type InitialStateType = {
  booksCount: number
  books: BookType[]
  isLoading: boolean
  error: string
};

const initialState: InitialStateType = {
  booksCount: 0,
  books: [],
  isLoading: false,
  error: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    booksLoading: (state) => {
      state.isLoading = true;
      state.booksCount = 0;
    },
    booksCount: (state, action: PayloadAction<number>) => {
      state.booksCount = action.payload;
    },
    booksLoaded: (state, action: PayloadAction<BookType[]>) => {
      state.isLoading = false;
      state.books = action.payload;
      state.error = '';
    },
    booksUploaded: (state, action: PayloadAction<BookType[]>) => {
      state.isLoading = false;
      state.books = [...state.books ,...action.payload];
      state.error = '';
    },
    booksLoadingError: (state, action: PayloadAction<string>) => {
      state.booksCount = 0;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  booksLoading,
  booksLoaded,
  booksUploaded,
  booksLoadingError,
  booksCount
} = booksSlice.actions;

export default booksSlice.reducer;