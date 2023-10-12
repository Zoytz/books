import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BookType } from '../../../types/types';

type InitialStateType = {
  book: BookType | undefined | null
  isLoading: boolean
  error: string
};

const initialState: InitialStateType = {
  book: null,
  isLoading: false,
  error: '',
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    bookLoading: (state) => {
      state.isLoading = true;
    },
    bookLoaded: (state, action: PayloadAction<BookType>) => {
      state.isLoading = false;
      state.book = action.payload;
      state.error = '';
    },
    bookLoadingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  bookLoading,
  bookLoaded,
  bookLoadingError,
} = bookSlice.actions;

export default bookSlice.reducer;