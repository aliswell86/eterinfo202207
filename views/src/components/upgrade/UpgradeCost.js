import React from 'react';
import styles from './UpgradeCost.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const UpgradeCost = ({itemInfo}) => {
  const {cost} = itemInfo
  return (
    <div className={cx('upgrade-cost')}>
      <h2 className={(cx('upgrade-cost-title'))}>업그레이드 비용 계산기</h2>
      <div className={cx('base-cost')}>기준가격: <NumberFormat value={cost} displayType={'text'} thousandSeparator={true} prefix={''} /></div>
    </div>
  );
};

export default UpgradeCost;