import { FC, ReactElement } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

type PropsType = {
  children: ReactElement[]
};

const Layout: FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
    </>
  )
};

export default Layout;