import React from 'react';
import styles from './WeaponWhereboxAd.scss';
import classNames from 'classnames/bind';
import WeaponWhereBoxContainer from 'containers/wherebox/WeaponWhereBoxContainer';
import AdsenseWherebox from 'components/adsense/etcpage/AdsenseWherebox';

const cx = classNames.bind(styles);

const WeaponWhereboxAd = () => {
  return (
    <div className={cx('weapon-where-box-ad')}>
      <WeaponWhereBoxContainer className={cx('WeaponWhereBoxContainer')}/>
      <AdsenseWherebox className={cx('adsense-wherebox')}/>
    </div>
  );
};

export default WeaponWhereboxAd;