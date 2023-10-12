import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__link'>
        Search for books
      </Link>
    </header>
  )
};

export default Header;