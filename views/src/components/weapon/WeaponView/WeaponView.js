import React from 'react';
import styles from './WeaponView.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const WeaponView = ({itemInfo}) => {
  const {
    item_nm, img_src, item_dtl_dv, dmg, cri, accuracy_rate, point_rate, speed, tier, size
  } = itemInfo;
  
  return (
    <div className={cx('weapon-view')}>
      <h2 className={cx('name')}>{item_nm}</h2>
      <div className={cx('item-info')}>
        <div className={cx('img')}><img src={img_src} alt={item_nm}/></div>
        <div className={cx('option')}>
          <div className={cx('dmg')}>
            파괴력:<NumberFormat value={dmg} displayType={'text'} thousandSeparator={true} prefix={''} />
          </div>
          <div className={cx('cri')}>치명타:{cri}</div>
        </div>
        <div className={cx('sub_option')}>
          <div className={cx('tier')}>{tier}등급</div>
          <div className={cx('detail_dv')}>{item_dtl_dv}</div>
          <div className={cx('size')}>{size}</div>
          <div className={cx('speed')}>{speed}/1분</div>
          <div className={cx('accuracy_rate')}>{accuracy_rate}%</div>
          <div className={cx('point_rate')}>{point_rate}%</div>
        </div>
      </div>
    </div>
  );
};

export default WeaponView;