import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import {ItemMenu} from './rightmenu';

const cx = classNames.bind(styles);

const Header = ({loginEvent, logged, profileId}) => {
  // const {pathname} = window.location;

  return (
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('header-content-body')}>
          <div className={cx('brand')}>
            <Link to="/">이터인포.kr</Link>
          </div>
          <div className={cx('right')}>
            <ItemMenu loginEvent={loginEvent} logged={logged} profileId={profileId}/>
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
    </header>
  );
};

export default Header;