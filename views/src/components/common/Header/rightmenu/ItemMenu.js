import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const innerStyle = {
  marginLeft: '0.4rem'
};

const ItemMenu = (/*{loginEvent, logged, profileId}*/) => (
  <div style={{padding: '0.2rem', cursor: 'pointer'}}>
    <span>
      <span className={cx('itemmenu-tit')}>아이템정보</span>
      <span className={cx('arrow-outstyle')}>
        <span className={cx('arrow-style')}/>
      </span>
      <div className={cx('item-submenu')}>
        <div><Link to="/wp">무기정보</Link></div>
        <div><Link to="/am">방어구정보</Link></div>
      </div>
    </span>
    <Link to="/custom" style={innerStyle}>
      공격력계산
    </Link>
    <Link to="/plusup" style={innerStyle}>
      플러스업
    </Link>
    <Link to="/boxsim" style={innerStyle}>
      상자뽑기
    </Link>
    {/* <span onClick={loginEvent} style={innerStyle}>
      {logged ? profileId : '로그인'}
    </span> */}
  </div>
);

export default ItemMenu;