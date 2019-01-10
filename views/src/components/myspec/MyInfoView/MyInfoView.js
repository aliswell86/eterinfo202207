import React from 'react';
import styles from './MyInfoView.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const MyInfoView = ({myStat}) => {
  const {invenDmg, invenCri} = myStat;

  return (
    <div className={cx('myinfo-view')}>
      <h2 className={cx('view-title')}>공격력상세정보</h2>
      <div className={cx('inven-body')}>
        <div className={cx('inven-dmg')}>
          <NumberFormat value={invenDmg} displayType={'text'} thousandSeparator={true} prefix={'공격력: '} />
        </div>
        <div className={cx('inven-cri')}>
          <NumberFormat value={invenCri} displayType={'text'} thousandSeparator={true} prefix={'치명: '} />
        </div>
      </div>
    </div>
  );
};

export default MyInfoView;