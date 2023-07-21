// IMPORT PACKAGES
import { Link } from 'react-router-dom';

// IMPORT STYLES
import './Header.scss';

// IMPORT COMPONENTS
import Navigation from '../Navigation/Navigation.jsx';

// IMPORT IMAGES
import logo from '../../assets/images/logo.png';

// HEADER COMPONENT
function Header({ onHamburgerClick }) {
  return (
    <header className='header'>
      <div className='header__wrapper' style={{ color: '#fff' }}>
        <Link to='/' className='header__link'>
          <img src={logo} alt='Логотип SpaceX' className='header__logo' />
        </Link>
        <Navigation />
        <button
          className='header__btn-hamburger'
          type='button'
          aria-label='Меню навигации'
          onClick={onHamburgerClick}
        ></button>
      </div>
    </header>
  );
}

export default Header;
