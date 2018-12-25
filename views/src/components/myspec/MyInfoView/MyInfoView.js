import React from 'react';
import styles from './MyInfoView.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const MyInfoView = ({myStat}) => {
  const {invenDmg} = myStat;

  return (
    <div className={cx('myinfo-view')}>
      {/* <h2 className={cx('view-title')}>현재상태</h2> */}
      <div className={cx('inven-dmg')}>인벤공격력: <NumberFormat value={invenDmg} displayType={'text'} thousandSeparator={true} prefix={''} /></div>
    </div>
  );
};

export default MyInfoView;