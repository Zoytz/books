export type categorySelectOptionsType = [
  'All',
  'Art',
  'Biography',
  'Computers',
  'History',
  'Medical',
  'Poetry'
];

export type sortingSelectOptionsType = [
  'relevance', 
  'newest'
];

export type BookType = {
  id: string
  volumeInfo: {
    title: string
    subtitle: string
    authors: string[]
    categories: string[]
    imageLinks?: {
      thumbnail: string
    }
  }
};

export type BooksResponseType = {
  totalItems: number
  items: BookType[]
};