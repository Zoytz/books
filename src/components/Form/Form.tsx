import Input from '../Input/Input';
import Selects from '../Selects/Selects';
import Select from '../Select/Select';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import { categorySelectOptions, sortingSelectOptions } from '../../constants/constants';

type PropsType = {
  searchQuery: string
  selectedCategory: string
  selectedSortFilter: string
  handleSetSearchQuery: (arg: string) => void
  handleSelectCategory: (e: ChangeEvent<HTMLSelectElement>) => void
  handleSelectFilter: (e: ChangeEvent<HTMLSelectElement>) => void
  handleSubmitForm: (arg: string) => void
};

const Form: FC<PropsType> = ({
  handleSetSearchQuery,
  handleSelectCategory,
  handleSelectFilter,
  searchQuery,
  selectedCategory,
  selectedSortFilter,
  handleSubmitForm }) => {

  

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    handleSetSearchQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery) return
    handleSubmitForm(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='form__search'>
        <Input
          handleSubmit={handleSubmit}
          handleChange={handleSearch}
          name='search'
          value={searchQuery}
        />
        <SubmitButton />
      </div>
      <Selects>
        <Select
          value={selectedCategory}
          options={categorySelectOptions}
          handleChange={handleSelectCategory}
          name='categories'
          title='Categories'
        />
        <Select
          value={selectedSortFilter}
          options={sortingSelectOptions}
          handleChange={handleSelectFilter}
          name='sorting'
          title='Sorting by'
        />
      </Selects>
    </form>
  )
};

export default Form;