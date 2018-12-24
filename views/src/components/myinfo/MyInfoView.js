import React from 'react';
import styles from './MyInfoView.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MyInfoView = () => {
  return (
    <div className={cx('myinfo-view')}>
      <h2 className={cx('view-title')}>현재상태</h2>
      <div className={cx('inven-dmg')}>인벤공격력: 12,000</div>
    </div>
  );
};

export default MyInfoView;