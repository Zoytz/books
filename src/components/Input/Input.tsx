import { ChangeEvent, FC, FormEvent, KeyboardEventHandler, SyntheticEvent } from 'react';

type PropsType = {
  name: string
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
};

const Input: FC<PropsType> = ({ name, value, handleChange, handleSubmit }) => {

  const handleEnterPress = (e: any) => {
    if (e.key !== 'Enter') return
    handleSubmit(e)
   };

  return (
    <input
      onKeyDown={handleEnterPress}
      onChange={handleChange}
      value={value}
      name={name}
      type='text'
      className='input'
    />
  )
}

export default Input;