import axios from 'axios';
import { AppDispatch, bookParams } from '../..';
import {
  bookLoading,
  bookLoaded,
  bookLoadingError
} from './bookSlice';

export const fetchBook = (bookId: string) => async (dispatch: AppDispatch) => {
  dispatch(bookLoading());
  await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}${bookParams}`)
    .then((res) => {
      dispatch(bookLoaded(res.data));
    })
    .catch((error) => dispatch(bookLoadingError(error.message)));
};





