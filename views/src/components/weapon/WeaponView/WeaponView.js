import React from 'react';
import styles from './WeaponView.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const WeaponView = ({weaponView}) => {
  const {
    item_nm, img_src
  } = weaponView;
  
  return (
    <div className={cx('weapon-view')}>
      <h2 className={cx('name')}>{item_nm}</h2>
      <div className={cx('item-info')}>
        <div className={cx('img')}><img src={img_src} alt={item_nm}/></div>
        <div className={cx('option')}>
          <div className={cx('dv')}>종류</div>
          <div className={cx('dmg')}>파괴력</div>
          <div className={cx('cri')}>치명</div>
          <div className={cx('accuracy')}>명중</div>
          <div className={cx('point')}>탄착</div>
          <div className={cx('speed')}>속도</div>
          <div className={cx('tier')}>등급</div>
          <div className={cx('size')}>크기</div>
        </div>
      </div>      
    </div>
  );
};

export default WeaponView;