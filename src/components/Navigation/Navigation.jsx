// IMPORT PACKAGES
import { Link } from 'react-router-dom';

// IMPORT STYLES
import './Navigation.scss';

// NAVIGATION COMPONENT
function Navigation({ isSideMenu, onClose }) {
  return (
    <nav className={`navigation ${isSideMenu ? '' : 'navigation_hidden'}`}>
      <ul
        className={`navigation__list ${
          isSideMenu ? 'navigation__list_direction_column' : ''
        }`}
      >
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_hamburger-menu' : ''
            }`}
            onClick={onClose}
          >
            Главная
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_hamburger-menu' : ''
            }`}
            onClick={onClose}
          >
            Технология
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_hamburger-menu' : ''
            }`}
            onClick={onClose}
          >
            График полетов
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_hamburger-menu' : ''
            }`}
            onClick={onClose}
          >
            Гарантии
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_hamburger-menu' : ''
            }`}
            onClick={onClose}
          >
            О компании
          </Link>
        </li>
        <li className='navigation__item'>
          <Link
            to='/'
            className={`navigation__link ${
              isSideMenu ? 'navigation__link_place_hamburger-menu' : ''
            }`}
            onClick={onClose}
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
