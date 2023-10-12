import { ReactElement } from 'react';

const Main = ({children}: {children: ReactElement[]}) => {
  return (
    <main className='main'>
      {children}
    </main>
  )
};

export default Main;