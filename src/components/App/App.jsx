// IMPORT PACKAGES
import { useState } from 'react';

// IMPORT COMPONENTS
import Promo from '../Promo/Promo.jsx';
import Header from '../Header/Header.jsx';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.jsx';

// IMPORT STYLES
import './App.scss';

// APP COMPONENT
function App() {
  // HOOKS
  const [isHamburgerMenu, setHamburgerMenuStatus] = useState(false);

  // HANDLER OPEN SIDE MENU
  function handleOpenSideMenu() {
    setHamburgerMenuStatus(!isHamburgerMenu);
  }

  // HANDLER CLOSE SIDE MENU
  function handleCloseSideMenu() {
    setHamburgerMenuStatus(false);
  }

  return (
    <div className='app__content'>
      <Header onHamburgerClick={handleOpenSideMenu} />
      <Promo />
      <HamburgerMenu
        isHamburgerMenu={isHamburgerMenu}
        onClose={handleCloseSideMenu}
      />
    </div>
  );
}

export default App;
