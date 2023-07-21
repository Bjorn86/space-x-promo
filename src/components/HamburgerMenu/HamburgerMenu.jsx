// IMPORT STYLES
import './HamburgerMenu.scss';

// IMPORT COMPONENTS
import Overlay from '../Overlay/Overlay.jsx';
import Navigation from '../Navigation/Navigation.jsx';

// HAMBURGER MENU COMPONENT
function HamburgerMenu({ isHamburgerMenu, onClose }) {
  return (
    <Overlay isActive={isHamburgerMenu} onClose={onClose}>
      <div
        className={`hamburger-menu ${
          isHamburgerMenu ? 'hamburger-menu_active' : ''
        }`}
      >
        <button
          className='hamburger-menu__btn-close hover-button'
          type='button'
          aria-label='Закрыть меню'
          onClick={onClose}
        ></button>
        <Navigation isSideMenu={true} onClose={onClose} />
      </div>
    </Overlay>
  );
}

export default HamburgerMenu;
