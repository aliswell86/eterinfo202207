import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import {ItemMenu} from './rightmenu';

const cx = classNames.bind(styles);

const Header = () => {
  // const {pathname} = window.location;

  return (
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('header-content-body')}>
          <div className={cx('brand')}>
            <Link to="/">이터인포.kr</Link>
          </div>
          <div className={cx('right')}>
            <ItemMenu/>
            {/* <div className={cx('total-search')}>
              <input className={cx('total-search-input')}
              type='text'
              name='totalSearch'
              placeholder='Google 통합검색'
              onKeyPress={(e) => {
                if(e.key === 'Enter') {
                  window.open(`https://www.google.com/search?q=site%3Aeterinfo.kr+${e.target.value}`);
                }
              }}/>
            </div> */}
          </div>
        </div>        
      </div>
      {/* <div className={cx('header-content-sub')}>
        <div className={cx('header-content-sub-body')}>
          <div> </div>
          <div className={cx('submenu-title')}>
            {
              pathname === '/custom' ? 
              <>
                <span style={{marginRight: '0.4rem'}}>무기변경</span>
                <span style={{marginRight: '0.4rem'}}>인벤정보</span>
                <span style={{marginRight: '0.4rem'}}>세팅설정</span>
                <span style={{marginRight: '0.4rem'}}>사냥시뮬</span>
              </>
              : ''
            }
          </div>
        </div> 
      </div>  */}
    </header>
  );
};

export default Header;