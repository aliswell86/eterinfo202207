import React from 'react';
import styles from './BestWeapon.scss';
import classNames from 'classnames/bind';
import Adsense300250 from 'components/adsense/Adsense300250';

const cx = classNames.bind(styles);

const BestWeapon = () => {
  return (
    <div className={cx('best-weapon-adsense')}>
      <div className={cx('best-weapon')}>
        <h2 className={cx('title')}>인기무기 주간 BEST</h2>
      </div>
      <Adsense300250/>
    </div>
  );
};

export default BestWeapon;