import axios from 'axios';
import { AppDispatch, baseUrl, booksParams } from '../..';
import { 
  booksLoading,
  booksLoaded,
  booksLoadingError, 
  booksUploaded,
  booksCount} from './booksSlice';

export const fetchBooks = (
  searchQuery: string, 
  selectedCategory: string, 
  startIndex: number,
  sortingFilter: string ) => async (dispatch: AppDispatch) => {

  const category = 
  selectedCategory === 'All' ? 
  '' : 
  `+subject:${selectedCategory.toLocaleLowerCase()}`;

  const sorting = sortingFilter === 'relevance' ? '' : '&orderBy=newest';

  dispatch(booksLoading());
  await axios.get(`${baseUrl}${booksParams}&q=${searchQuery}${category}&startIndex=${startIndex}${sorting}`)
    .then((res) => {
      if (startIndex === 1) {
        dispatch(booksCount(res.data.totalItems));
        dispatch(booksLoaded(res.data.items));
      } else {
        dispatch(booksCount(res.data.totalItems));
        dispatch(booksUploaded(res.data.items));
      }
    })
    .catch((error) => dispatch(booksLoadingError(error.message)));
};





