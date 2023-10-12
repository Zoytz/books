import { FC, ReactElement } from 'react';

type PropsType = {
  children: ReactElement | ReactElement[]
};

const Books: FC<PropsType> = ({children}) => {
  return (
    <ul className='books'>
      {children}
    </ul>
  )
};

export default Books;