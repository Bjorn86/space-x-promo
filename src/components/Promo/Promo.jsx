// IMPORT PACKAGES
import { Link } from 'react-router-dom';

// IMPORT STYLES
import './Promo.scss';

// PROMO COMPONENT
function Promo() {
  return (
    <section className='promo'>
      <div className='promo__wrapper'>
        <div className='promo__column promo__column_position_left'>
          <h1 className='promo__title'>
            <span className='promo__title-uppercase'>Путешествие </span>на
            красную планету
          </h1>
          <button className='promo__btn-start' type='button'>
            Начать путешествие
          </button>
        </div>
        <div className='promo__column promo__column_position_right'>
          <ul className='promo__list'>
            <li className='promo__list-item'>
              <Link
                to='/'
                className='promo__link promo__link_position_left promo__link_position_top'
              >
                <span className='promo__text-accent-small'>мы</span>
                <span className='promo__text-accent-big'> 1 </span>на рынке
              </Link>
            </li>
            <li className='promo__list-item'>
              <Link to='/' className='promo__link promo__link_position_top'>
                гарантируем
                <span className='promo__text-accent-big'> 50% </span>
                безопасность
              </Link>
            </li>
            <li className='promo__list-item'>
              <Link
                to='/'
                className='promo__link promo__link_position_left promo__link_position_bottom'
              >
                календарик за
                <span className='promo__text-accent-big'>
                  {' '}
                  2001<span className='promo__text-accent-small-bold'>г. </span>
                </span>
                в подарок
              </Link>
            </li>
            <li className='promo__list-item'>
              <Link to='/' className='promo__link promo__link_position_bottom'>
                путешествие
                <span className='promo__text-accent-big'> 597 </span>дней
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Promo;
