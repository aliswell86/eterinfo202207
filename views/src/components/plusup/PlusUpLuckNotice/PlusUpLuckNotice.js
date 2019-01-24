import React from 'react';
import styles from './PlusUpLuckNotice.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PlusUpLuckNotice = ({plusUpLuck}) => {
  const plusUpLuckList = plusUpLuck.map(luck => {
    const {up, success, fail, failZero} = luck;

    return (
      <div className={cx('luck-object')} key={up}>
        <div className={cx('luck-object-up')}>+{up}</div>
        <div className={cx('luck-object-suc')}>성공:{success}%</div>
        <div className={cx('luck-object-fail')}>실패:{fail}%</div>
        <div className={cx('luck-object-failzero')}>초기화:{failZero}%</div>
      </div>
    )
  });

  return (
    <div className={cx('plus-luck-notice')}>
      <div className={cx('luck-title')}>플러스업 확률안내</div>
      <div className={cx('luck-list')}>
        {plusUpLuckList}
      </div>
    </div>
  );
};

export default PlusUpLuckNotice;