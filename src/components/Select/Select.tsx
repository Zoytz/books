import { ChangeEvent, FC } from 'react';
import { categorySelectOptionsType, sortingSelectOptionsType } from '../../types/types';

type PropsType = {
  options: categorySelectOptionsType | sortingSelectOptionsType
  title: string
  name: string
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
  value: string
};

const Select: FC<PropsType> = ({
  title,
  name,
  handleChange,
  options,
  value }) => {

  return (
    <label className='label'>
      {title}
      <select
        value={value}
        onChange={handleChange}
        name={name}
        className='select'
      >
        {options.map((option) => {
          return (
            <option
              key={option}
              value={option}
              className='select__option'
            >
              {option}
            </option>
          )
        })}
      </select>
    </label>
  )
};

export default Select;