import React from 'react';
import styles from './WeaponWhereboxAd.scss';
import classNames from 'classnames/bind';
import WeaponWhereBoxContainer from 'containers/wherebox/WeaponWhereBoxContainer';
import Adsense300250 from 'components/adsense/Adsense300250';

const cx = classNames.bind(styles);

const WeaponWhereboxAd = () => {
  return (
    <div className={cx('weapon-where-box-ad')}>
      <WeaponWhereBoxContainer className={cx('WeaponWhereBoxContainer')}/>
      <Adsense300250/>
    </div>
  );
};

export default WeaponWhereboxAd;