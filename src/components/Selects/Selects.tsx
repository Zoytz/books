import { ReactElement } from 'react';

const Selects = ({children}: {children: ReactElement[]}) => {
  return (
    <div className='selects'>
      {children}
    </div>
  )
};

export default Selects;